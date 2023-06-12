import React, { useState } from 'react'
import useAxiosSecure from '../hooks/useAxiosSecure';
import useAuth from '../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';

const Mypayment = () => {
 const [axiosSecure] = useAxiosSecure();
  const [phistory, setPHistory] = useState([]);
  const {user} = useAuth()

 const { data, refetch } = useQuery({
   queryKey: ["mypaymentHistory"],
   queryFn: async () => {
     const res = await axiosSecure(`/mypaymentHistory?email=${user.email}`);
     setPHistory(res.data);
     return res.data;
   },
 });
 console.log(data);
  return (
    <div className='w-full bg-emerald-200 h-full '>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead className="font-bold text-xl text-white">
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>TransectionId</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Courses</th>
            </tr>
          </thead>
          <tbody>
            {phistory?.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>{item.email}</td>
                <td>{item.transectionId}</td>
                <td>{item.quantity}</td>
                <td>$ {item.price}</td>
                <td>{item.selectedClassItemsNames.map(name => <li>{name}</li>)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Mypayment