import React, { useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const ManageClasses = () => {

  const [allClasses, setAllClasses] = useState();
  const [axiosSecure] = useAxiosSecure();


  const { data, refetch } = useQuery({
    queryKey: ["/allclasses"],
    queryFn: async () => {
      const response = await axiosSecure.get("/classes");
      setAllClasses(response.data);
      return response.data;
    },
  });
  console.log(allClasses);

  const handleApprove = (id) =>{
    console.log('hello',id);
    const token = localStorage.getItem("access_token");
    // Retrieve the authorization token from local storage

    fetch(`http://localhost:4000/updateMyClass/${id}`,{
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
        }
        console.log(data);
      });
    // console.log('heelo')
  };
  const handleDenial = (id) => {
   const token = localStorage.getItem("access_token");
    fetch(`http://localhost:4000/updateMyClassDenial/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
        }
        console.log(data);
      });
  };

  return (
    <div>
      <table className="table table-zebra w-full">
        {/* head */}
        <thead className="font-bold  ">
          <tr>
            <th>Image</th>
            <th>Course Name</th>
            <th>Inst. Name</th>
            <th>Inst.Email</th>
            <th>A.seats</th>
            <th>Price</th>
            <th>Status</th>
            <th colSpan={3} className="text-center">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {allClasses?.map((item) => (
            <tr key={item._id}>
              <td>
                <div className="w-24 rounded">
                  <img src={item.Image} />
                </div>
              </td>

              <td>{item.Name}</td>
              <td>{item.InstructorName}</td>
              <td>{item.Email}</td>
              <td>{item.AvailableSeats}</td>
              <td>${item.Price}</td>

              <td>{item.status}</td>
              <td className="p-0 m-0">
                {item.status === "pending" ? (
                  <>
                    <button
                      onClick={()=> handleApprove(item._id)}
                      disabled={item.status === "denied"}
                      className="btn btn-xs btn-primary "
                    >
                      Approve
                    </button>
                  </>
                ) : (
                  <>
                    {" "}
                    <button
                      disabled={item.status === "denied"}
                      className="btn btn-xs btn-primary "
                    >
                      Approved
                    </button>
                  </>
                )}
              </td>
              <td className="p-0 m-0">
                {item.status === "pending" ? (
                  <>
                    {" "}
                    <button
                      onClick={() => handleDenial(item._id)}
                      disabled={
                        item.status === "denied" || item.status === "approved"
                      }
                      className="btn btn-xs btn-primary"
                    >
                      Deny
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      disabled={
                        item.status === "denied" || item.status === "approved"
                      }
                      className="btn btn-xs btn-primary"
                    >
                      Denied
                    </button>
                  </>
                )}
              </td>
              <td className="p-0 m-0">
                <Link to={`feedback/${item._id}`}>
                  <button
                    disabled={item.status === "approved"}
                    className="btn btn-xs btn-primary"
                  >
                    {/* onClick={() => window.my_modal_1.showModal(item._id)} */}
                    feedback
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageClasses;
