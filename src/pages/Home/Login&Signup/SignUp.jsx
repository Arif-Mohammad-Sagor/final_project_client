import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../../components/SocialLogin";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
import signUp from '../../../../public/assets/login.png'

const SignUp = () => {
  const { createUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    //  console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        updateUserProfile(data.name, data.photo)
          .then((result) => {
            //  console.log(result);
            const addUser = { name: data.name, email: data.email,image:data.photo };
            console.log(addUser);
            axios
              .post(`http://localhost:4000/addUsers`, addUser)
              .then((res) => {
                console.log(res);
              });
          })
          .catch();
        console.log(result);
        Swal.fire({
          icon: "success",
          title: "Successfully user loggdIn",
          text: "Cool",
        });
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.message}`,
        });
      });
  };

  return (
    <div className="px-16">
      <div className="hero min-h-screen bg-base-100">
        <div className="flex flex-col md:flex-row">
          <div className="w-1/2 p-8">
            <img src={signUp} className="w-full  aspect-square" />
          </div>
          <div className="  w-1/2 flex min-h-screen items-center  bg-base-100">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="card-body px-16 py-12 shadow-lg"
            >
              <p className="text-3xl text-center font-bold">SignUp</p>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  {...register("name", { required: true })}
                  placeholder="Name"
                  className="input input-bordered"
                />
              </div>
              {/* errors will return when field validation fails  */}
              {errors.name && (
                <span className="text-red-600">This field is required</span>
              )}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo-URL</span>
                </label>
                <input
                  type="url"
                  name="photo"
                  {...register("photo", { required: true })}
                  placeholder="Photo-url"
                  className="input input-bordered"
                />
              </div>
              {/* errors will return when field validation fails  */}
              {errors.photo && (
                <span className="text-red-600">This field is required</span>
              )}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  {...register("email", { required: true })}
                  placeholder="Email"
                  className="input input-bordered"
                />
              </div>
              {/* errors will return when field validation fails  */}
              {errors.email && (
                <span className="text-red-600">Email is required</span>
              )}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  {...register("password", {
                    pattern:
                      /^(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                    required: true,
                    minLength: 6,
                  })}
                  className="input input-bordered"
                />
              </div>
              {/* errors will return when field validation fails  */}
              {errors.password?.type === "required" && (
                <p className="text-red-600">Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <span className="text-red-600">
                  Password should be minimum 6 charecters
                </span>
              )}

              {errors.password?.type === "pattern" && (
                <span className="text-red-600">
                  {" "}
                  Password should contain at least one uppercase and one special
                  charecter
                </span>
              )}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  name="confirm password"
                  placeholder="confirm password"
                  {...register("confirmPassword", {
                    validate: (value) => value === watch("password"),
                    required: true,
                    minLength: 6,
                  })}
                  className="input input-bordered"
                />
                {errors.confirmPassword && (
                  <span className="text-red-600">
                    Didn't match with password
                  </span>
                )}
              </div>
              <button type="submit" className="btn btn-primary">
                Login
              </button>
              <p>
                Already have an account{" "}
                <Link className="text-blue-600 underline" to="/login">
                  Signup
                </Link>
              </p>

              <SocialLogin></SocialLogin>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
