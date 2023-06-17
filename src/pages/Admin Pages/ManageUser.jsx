import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";

const ManageUser = () => {
  const { user } = useAuth();
  const [myusers, setmyUsers] = useState([]);

  // console.log(user);

  const [axiosSecure] = useAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["allUsers", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/allUsers`);
      console.log(res.data);
      setmyUsers(res.data);
      return res.data;
    },
  });

  const handleMakeInstructor = (item) => {
fetch(`https://last-try-nuku.onrender.com/allUsers/instructor/${item._id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          Swal.fire(`${item.name} has been added as a Instructor`);
        }
      });
  };
  const handleMakeAdmin = (item) => {
    const token = localStorage.getItem("access_token");
    // Retrieve the authorization token from local storage

    fetch(`https://last-try-nuku.onrender.com/allUsers/admin/${item._id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Include the token in the Authorization header
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          Swal.fire(`${item.name} has been added as a admin`);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const table_data = myusers?.map((item, index) => (
    <tr key={item._id}>
      <td>
        <label>{index + 1}</label>
      </td>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.role}</td>
      <td>
        <button
          onClick={() => handleMakeAdmin(item)}
          className="btn btn-primary btn-xs"
          disabled={item.role === "admin"}
        >
          Make Admin
        </button>
      </td>
      <td>
        <button
          onClick={() => handleMakeInstructor(item)}
          className="btn btn-primary btn-xs"
          disabled={item.role === "instructor"}
        >
          Make Instructor
        </button>
      </td>
    </tr>
  ));

  return (
    <div className="w-full h-full bg-emerald-200">
      <div className=" my-4">
        <p className="text-2xl text-center uppercase">
          You have Totol : {users.length} users
        </p>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead className="text-xl font-bold">
            <tr>
              <th>SL.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th colSpan={2} className="text-center">
                Admin Action
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {table_data}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUser;
