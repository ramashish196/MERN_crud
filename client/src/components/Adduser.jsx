import React, { useState } from "react";
import { userApi } from "../services/api";
const Adduser = () => {
  const [formData, setFormData] = useState({});
  const handleFormData = (e) => {
    // console.log(e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // console.log(formData);
  };
  const adduserDetails = async (e) => {
    e.preventDefault();
    const res = await userApi(formData);
    // console.log("hi", res);
  };
  return (
    <>
      <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
        <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
          <form>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 "
              >
                Name
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="text"
                  name="name"
                  onChange={(e) => {
                    handleFormData(e);
                  }}
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Email
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="email"
                  name="email"
                  onChange={(e) => {
                    handleFormData(e);
                  }}
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Password
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="password"
                  name="password"
                  onChange={(e) => {
                    handleFormData(e);
                  }}
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <div className="mt-4"></div>
            <div className="flex items-center justify-center mt-4">
              <button
                type="submit"
                onClick={(e) => adduserDetails(e)}
                className="flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
              >
                addUser
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Adduser;
