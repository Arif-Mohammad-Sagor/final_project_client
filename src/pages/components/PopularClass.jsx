import axios from "axios";
import React, { useEffect, useState } from "react";

const PopularClass = () => {
  const [topClasess, setTopClasses] = useState([]);

  useEffect(() => {
    axios
      .get("https://last-try-nuku.onrender.com/topClasses")
      .then((response) => {
        console.log(response);
        setTopClasses(response.data);
      });
  }, []);

  return (
    <>
      <div className="md:text-4xl text-center my-8"> Popular Classes</div>
      <div
        className="
     grid
     md:grid-cols-3
      w-full
         my-16
         space-y-8
         justify-center
         "
      >
        {topClasess &&
          topClasess?.map((classItem) => (
            <div
              key={classItem._id}
              className={`card w-4/5 mx-auto shadow-xl flex justify-center ${
                classItem.AvailableSeats === 0 ? "bg-red-500" : " bg-base-100 "
              }`}
            >
              <figure>
                <img src={classItem.Image} alt="instuctors" />
              </figure>
              <div className="card-body">
                <h2>CourseName: {classItem.Name}</h2>
                <p className="text-sm">
                  InstructorName: {classItem.InstructorName}
                </p>
                <p className="">Stu.Enrolled: {classItem.studentQty}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default PopularClass;
