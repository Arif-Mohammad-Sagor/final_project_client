import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleLogin = (e) => {};
  return (
    <div className="px-16">
      <div className="hero min-h-screen bg-base-100">
        <div className="flex flex-col md:flex-row">
          <div className="w-1/2 p-8">
            <img src="random.img" className="w-full  aspect-square" />
          </div>
          <div className="  w-1/2 flex min-h-screen items-center  bg-base-100">
            <form
              onSubmit={handleLogin}
              className="card-body   px-16 py-12 shadow-lg"
            >
              <p className="text-3xl text-center font-bold">Login Please</p>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={passwordVisible ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <p
                    onClick={() => setPasswordVisible(!passwordVisible)}
                    className="
                 label-text-alt
                 text-end link
                 link-hover
                 relative -top-10 left-44"
                  >
                    {passwordVisible ? (
                      <FaEyeSlash></FaEyeSlash>
                    ) : (
                      <FaEye></FaEye>
                    )}
                  </p>
                </label>
              </div>
              <div className="form-control">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
                <p>
                  Don't have any account{" "}
                  <Link className="text-blue-600 underline" to="/signup">
                    Signup
                  </Link>
                </p>
              </div>
              <p className="text-red-600">{error}</p>
              <p className="text-green-600">{success}</p>
              {/* <SocialLogin></SocialLogin> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
