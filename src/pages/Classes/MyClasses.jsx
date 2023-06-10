import React, { useEffect, useState } from 'react'
import useAuth from '../hooks/useAuth'
import useAxiosSecure from '../hooks/useAxiosSecure'

const MyClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth()
  const [myClasses,setMyClasses]=useState([])
  useEffect(() => {
      axiosSecure.get(`/myAllClasses?InstructorName=${user?.displayName}`)
          .then((data) => setMyClasses(data.data));
   },[])
  return (
    <div className="w-full h-full bg-emerald-200">
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr className="text-lg font-black">
              <th>C.Name</th>
              <th>Ins.Name</th>
              <th>Avail.Seats</th>
              <th>Price</th>
              <th>EnrolledStu.</th>
              <th>Status</th>
              <th>Feedback</th>
              <th colSpan={2} className="text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {myClasses?.map((item) => (
              <tr key={item._id}>
                <td>{item.Name}</td>
                <td>{item.InstructorName}</td>
                <td>{item.AvailableSeats}</td>
                <td>$ {item.Price}</td>
                <td> {item.studentQty}</td>
                <td> {item.status}</td>
                {item.status === "pending" || item.status === "approved" ? (
                  <td></td>
                ) : (
                  <td>
                  {item.feedback}
                  </td>
                )}
                <td>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-primary btn-xs"
                  >
                    update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyClasses