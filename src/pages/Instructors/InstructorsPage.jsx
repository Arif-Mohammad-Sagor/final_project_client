import axios from "axios";
import React, { useEffect, useState } from "react";

const InstructorsPage = () => {
  const [instuctors, setInstructors] = useState([]);
  useEffect(() => {
    axios
      .get("
https://last-try-nuku.onrender.com/
instructors")
      .then((response) => setInstructors(response.data));
  }, []);

  return (
    <div className="grid grid-cols-3 mx-4 my-8 gap-y-8 justify-center ">
      {instuctors &&
        instuctors.map((instructor) => (
          <div
            key={instructor._id}
            className="card w-4/5 flex justify-center  bg-base-100 shadow-xl"
          >
            <figure>
              <img src={instructor.image} alt="instuctors" className="h-64 " />
            </figure>
            <div className="card-body">
              <h2>Name: {instructor.name}</h2>
              <p className="text-sm">Email: {instructor.email}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default InstructorsPage;
