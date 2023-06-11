import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

export const Feedback = () => {
  const { id } = useParams();
  const [textareaValue, setTextareaValue] = useState("");
  const handleTextareaChange = (event) => {
    setTextareaValue(event.target.value);
  };

  const handleFeedback = (e) => {
    e.preventDefault();
    const feedbackContent = textareaValue;

    fetch(`http://localhost:4000/updateMyInstructorClass/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ feedback: feedbackContent }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire("Your feedback is sent");
        }
        console.log(data);
      });
  };
  return (
    <>
      <p className="text-xl font-bold"> FeedBack Page</p>
      <div className="w-3/5 h-3/5 rounded-md  bg-emerald-100 flex justify-center items-center shadow-xl px-8 py-10">
        <form className=" w-full">
          <h3 className="font-bold text-lg">Write Your feedback here !</h3>
          <textarea
            className="w-full h-full"
            value={textareaValue}
            onChange={handleTextareaChange}
          />

          <button onClick={handleFeedback} type="submit" className="btn">
            Send
          </button>
        </form>
      </div>
    </>
  );
};
