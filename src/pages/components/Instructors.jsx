import axios from "axios";
import React, { useEffect, useState } from "react";

const Instructors = () => {
  const [topInstructor, setTopInstructor] = useState([]);

  useEffect(() => {
    axios
      .get("
https://last-try-nuku.onrender.com/
topInstructor")
      .then((response) => {
        console.log(response);
        setTopInstructor(response.data);
      });
  }, []);

  return (
    <>
      <div className="md:text-4xl text-center my-8"> Popular Instructor</div>
      <div className=" w-full  grid md:grid-cols-3 my-16 gap-y-8 justify-center">
        {topInstructor &&
          topInstructor?.map((classItem) => (
            <div
              key={classItem._id}
              className={`card w-4/5 mx-auto shadow-xl flex justify-center ${
                classItem.AvailableSeats === 0 ? "bg-red-500" : " bg-base-100 "
              }`}
            >
              <figure>
                <img src={classItem.image} alt="instuctors" />
              </figure>
              <div className="card-body">
                <h2>InstructorName: {classItem.name}</h2>
                <p className="">Stu.Enrolled: {classItem.classesQnty}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Instructors;
