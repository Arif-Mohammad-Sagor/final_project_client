import axios from 'axios';
import React, { useEffect, useState } from 'react'

const PopularClass = () => {
  const [topClasess, setTopClasses] = useState([]);

  useEffect(() => {
     axios.get("http://localhost:4000/topClasses")
       .then((response) => {
         console.log(response);
         setTopClasses(response.data);
       });
  }, [])

  return (
    <>
      <div className='text-4xl text-center my-8'> Popular Classes</div>
      <div className=" w-full  ml-10 grid grid-cols-3 my-16 gap-y-8 justify-center">
        {topClasess &&
          topClasess?.map((classItem) => (
            <div
              key={classItem._id}
              className={`card w-4/5 shadow-xl flex justify-center ${
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
                {/* <p className="text-sm">
                  AvailableSeats: {classItem.AvailableSeats}
                </p>
                <p className="text-sm">Price: ${classItem.Price}</p> */}
                <p className="">Stu.Enrolled: {classItem.studentQty}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default PopularClass