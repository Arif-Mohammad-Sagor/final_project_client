import React from "react";
import useClassesLoader from "../hooks/useClassesLoader";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyCart = () => {
  const [data, refetch] = useClassesLoader();

  // console.log(data);
  const totalPrice = data?.reduce((sum, item) => sum + item.Price, 0);

  const handleDelete = (id) => {
    fetch(`http://localhost:4000/selectedClasses/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          }).then((result) => {
            if (result.isConfirmed) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
        }
      });
  };
  return (
    <div className="bg-emerald-100 w-full min-h-screen">
      <div className="flex justify-around items-center">
        <p className="text-2xl"> You have to pay total: ${totalPrice}</p>
        <Link to="/dashboard/makepayment">
          <span className="btn btn-primary">Pay</span>
        </Link>
      </div>
      {/* // table stats heree */}
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>C.Name</th>
              <th>Ins.Name</th>
              <th>Avails.Seats</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>{item.Name}</td>
                <td>{item.InstructorName}</td>
                <td>{item.AvailableSeats}</td>
                <td>$ {item.Price}</td>
                <td>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-primary btn-sm"
                  >
                    {" "}
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
