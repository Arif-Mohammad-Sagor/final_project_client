import axios from 'axios';
import React, { useEffect, useState } from 'react'
import useAuth from '../hooks/useAuth';
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';

const ClassesPage = () => {
  const [classes, setClasses] = useState([]);
  const { user } = useAuth();
  const navigate = useNavigate();
  // TODO: HAVE TO CREATE HOOKS FOR ADMIN AND INSTRUCTOR
  const isAdmin = false;
  const isInstructor = false;

    useEffect(() => {
        axios
            .get("http://localhost:4000/classes")
            .then((response) => setClasses(response.data));
    }, []);

  const handleEnrollment = (classItem) => {
    const {
      Name,
      Image,
      _id,
      InstructorName,
      AvailableSeats,
      Price,
      studentQty,
    } = classItem;
    // console.log(classItem);
    if (!user) {
      Swal.fire({
        text: "You have to loggin first",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ok",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login')
          // Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      });
    }
    const selectedClassItem = {
      Name,
      Image,
      ClassItemId: _id,
      InstructorName,
      AvailableSeats,
      Price,
      studentQty,
      Email: user.email
    };
    // console.log(selectedClassItem);
    axios
      .post("http://localhost:4000/selectedClass", selectedClassItem)
      .then((response) => {
        // console.log(response, "", response.data)
        if (response.data.insertedId) {
          Swal.fire("Cool!", "You have added the class to cart !", "success");
        }
  });


  }
    return (
      <div className="grid grid-cols-3 mx-4 my-8 gap-y-8 justify-center">
        {classes &&
          classes.map((classItem) => (
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
                <p className="text-sm">
                  AvailableSeats: {classItem.AvailableSeats}
                </p>
                <p className="text-sm">Price: ${classItem.Price}</p>
                <p className="text-sm">studentQty: {classItem.studentQty}</p>
                <div className="card-actions justify-end">
                  <button
                    onClick={() => handleEnrollment(classItem)}
                    disabled={
                      classItem.AvailableSeats === 0 || isAdmin || isInstructor
                    }
                    className="btn btn-primary"
                  >
                    Enroll{" "}
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    );
}

export default ClassesPage