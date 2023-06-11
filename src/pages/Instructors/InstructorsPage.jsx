import axios from "axios";
import React, { useEffect, useState } from "react";

const InstructorsPage = () => {
  const [instuctors, setInstructors] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/instructors")
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
              <img src={instructor.image} alt="instuctors" />
            </figure>
            <div className="card-body">
              <h2>Name: {instructor.name}</h2>
              <p className="text-sm">Email: {instructor.email}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Contact</button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default InstructorsPage;
