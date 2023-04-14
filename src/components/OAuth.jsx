import React from "react";
import { FcGoogle } from "react-icons/fc";

export const OAuth = () => {
  return (
    <button
      className=" flex item-center justify-center w-full bg-red-700 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:shadow-lg active:shadow-lg hover:bg-red-800 transition duration-150 ease-in-out active:bg-red-900"
      type="submit"
    >
      <FcGoogle className="text-2xl bg-white rounded-full mr-2" />
      Continue with Google
    </button>
  );
};
