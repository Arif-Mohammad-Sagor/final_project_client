import React, { useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const EnrolledClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const [enrollClasses, setEnrollClasses] = useState([]);

  const { data, refetch} = useQuery({
    queryKey: ["enrolledClasses"],
    queryFn: async () => {
      const res = await axiosSecure(`/myEnrolledClasses`);
      setEnrollClasses(res.data.classes);
      return res.data;
    },
  });
  console.log(data.classes);

  return (
    <div className=" w-full min-h-screen bg-emerald-200">
      <p className="capitalize text-2xl text-center py-8 mb-4"> my enrolled Classes  No:{enrollClasses.length}</p>

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead className="font-bold text-xl ">
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Course Name</th>
              <th>Instructor Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {enrollClasses?.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="w-32 rounded">
                    <img src={item.Image} />
                  </div>
                </td>
                <td>{item.Name}</td>
                <td>{item.InstructorName}</td>
                <td>$ {item.Price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EnrolledClasses;
