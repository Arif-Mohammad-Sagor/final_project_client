import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Instructors = () => {
const [topInstructor, setTopInstructor] = useState([]);

useEffect(() => {
  axios.get("http://localhost:4000/topInstructor").then((response) => {
    console.log(response);
   setTopInstructor(response.data);
  });
}, []);


  return (
    <>
      <div className="text-4xl text-center my-8"> Popular Instructor</div>
      <div className=" w-full  ml-10 grid grid-cols-3 my-16 gap-y-8 justify-center">
        {topInstructor &&
          topInstructor?.map((classItem) => (
            <div
              key={classItem._id}
              className={`card w-4/5 shadow-xl flex justify-center ${
                classItem.AvailableSeats === 0 ? "bg-red-500" : " bg-base-100 "
              }`}
            >
              <figure>
                <img src={classItem.image} alt="instuctors" />
              </figure>
              <div className="card-body">
                <h2>InstructorName: {classItem.name}</h2>
                {/* <p className="text-sm">
                  InstructorName: {classItem.InstructorName}
                </p> */}
                {/* <p className="text-sm">
                  AvailableSeats: {classItem.AvailableSeats}
                </p>
                <p className="text-sm">Price: ${classItem.Price}</p> */}
                <p className="">Stu.Enrolled: {classItem.classesQnty}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default Instructors