import React from 'react'
import useAuth from '../hooks/useAuth';
import axios from 'axios';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import useAxiosSecure from '../hooks/useAxiosSecure';
const img_hosting_token = import.meta.env.VITE_IMG_HOSTING_API;
const AddClass = () => {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [axiosSecure] = useAxiosSecure();
  const onSubmit = (data) => {
    console.log(data);
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

    // const form = e.target;
    // const className =form.coursename.value;
    // const price = form.price.value;
    // const seatsAvailable = form.seatsNumber.value;
    // const photo = form.photo.value;


const formData = new FormData();

    formData.append("image",data.photo[0]);

    axios.post(img_hosting_url, formData)
      .then((response) => {
        console.log(response.data)
        if (response.status === 200) {
        const image = response.data.data.display_url;

const classInfo = {
  Image: image,
  Name: data.coursename,
  InstructorName: user?.displayName,
  AvailableSeats: parseInt(data.availAbleSeats),
  Price: parseInt(data.price),
  studentQty: parseInt(10),
  status: "pending",
          };
          console.log(classInfo);
        axiosSecure.post("/newClasses", classInfo).then((data) => {
          if (data.data.insertedId) {
            reset();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Item added successfully",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      }
    });

    // console.log(classInfo);
  }
  return (
    <div className="w-full bg-emerald-200 h-full">
      <section className="p-6 dark:bg-gray-800 dark:text-gray-50">
        <p className="text-3xl  font-black">Add A New Class</p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="container flex flex-col mx-auto ng-untouched ng-pristine ng-valid"
        >
          <fieldset className="grid grid-cols-4 gap-2 rounded-md shadow-sm dark:bg-gray-900">
            <div className="grid grid-cols-6 gap-2 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label for="firstname" className="text-sm">
                  Class Name
                </label>
                <input
                  id="firstname"
                  type="text"
                  name="coursename"
                  {...register("coursename", { required: true })}
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                />
                {errors.recipeName && <span>Recipe name is required</span>}
              </div>
              <div className="col-span-full sm:col-span-3">
                <label for="lastname" className="text-sm">
                  Instructor Name
                </label>
                <input
                  id="lastname"
                  type="text"
                  disabled
                  name="instructorName"
                  defaultValue={user?.displayName}
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label for="email" className="text-sm">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  email="email"
                  defaultValue={user.email}
                  disabled
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label for="address" className="text-sm">
                  Price
                </label>
                <input
                  id="address"
                  type="text"
                  {...register("price", { required: true })}
                  name="price"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label for="city" className="text-sm">
                  AvailAble Seats
                </label>
                <input
                  id="city"
                  type="text"
                  {...register("availAbleSeats", { required: true })}
                  placeholder="number of seats"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                />
              </div>

              <div className="col-span-full sm:col-span-3">
                <label for="bio" className="text-sm">
                  Photo
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    id="city"
                    type="file"
                    {...register("photo", { required: true })}
                    className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                  />
                </div>
              </div>
              <div>
                <input
                  type="submit"
                  className="cursor-pointer bg-white"
                  value="Add Now"
                />
              </div>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
}

export default AddClass