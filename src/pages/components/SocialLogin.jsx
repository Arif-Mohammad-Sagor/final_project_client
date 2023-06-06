import React from 'react'
import { FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {
    const handleSocialLogin = () => {

    }
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
}

export default SocialLogin