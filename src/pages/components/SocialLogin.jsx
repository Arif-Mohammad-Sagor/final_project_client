import React from "react";
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import axios from "axios";

const SocialLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const { googleSignIn } = useAuth();

  const handleSocialLogin = () => {
    googleSignIn()
      .then((result) => {
        const loggedUser = result.user;

        const saveUser = {
          name: loggedUser.displayName,
          email: loggedUser.email,
        };
        //  console.log(saveUser);
        axios
          .post(`http://localhost:4000/addUsers`, saveUser)
          .then((response) => {
            navigate(from, { replace: true } || "/");
            console.log(response);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="w-full text-center">
        <span className=" text-semibold "> Or login with google</span>
        <br />
        <button
          onClick={handleSocialLogin}
          className="btn btn-wide  btn-outline mt-2"
        >
          <FaGoogle></FaGoogle>google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
