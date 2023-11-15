import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {

  const [error, setError] = useState("");

  
  const {user, createUser} = useContext(AuthContext);

  const notify = () => {
    return toast.success("Account created successfully!!!", {
      position: toast.POSITION.BOTTOM_CENTER,
    });
  }

  const notifyError = () => {
    return toast.error("Something went wrong please try again...", {
      position: toast.POSITION.BOTTOM_CENTER,
    });
  }

  function resolveAfter2Seconds() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('resolved');
      }, 5000);
    });
  }

  async function asyncCall() {
    
    
   const windows = window.location.assign('/');
   windows = await resolveAfter2Seconds();
   notify();
    // Expected output: "resolved"
    return windows, notify();
  }
 


  const handleSignUp = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    setError("");
    if(password.length < 6){
      return setError("password must be 6 characters or longer");
    }
    console.log(email, password);
    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
        
        asyncCall();
       
        form.reset();
       
      })
      .catch((error) => {
        console.log(error);
        notifyError();
      });
  };
  return (
    <div>
      <div className="bg-gray-800">
        <div className="p-8 lg:w-1/2 mx-auto">
          <div className="bg-gray-100 rounded-t-lg p-3"></div>
          <div className="bg-gray-100 rounded-b-lg py-3 px-4 lg:px-24">
            <p className="text-center text-xl text-black font-bold">
              Create account
            </p>
            <form onSubmit={handleSignUp} className="mt-3">
              <div className="relative mt-3">
                <input
                  className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                  
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
                <div className="absolute left-0 inset-y-0 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 ml-3 text-gray-400 p-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
              </div>
              <div className="relative mt-3">
                <input
                  className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                  
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
                <div className="absolute left-0 inset-y-0 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 ml-3 text-gray-400 p-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
                  </svg>
                </div>
              </div>
              <p className="mt-4 italic text-red-900 text-xs">
                {error}
              </p>
              <div className="mt-4 flex items-center text-gray-500">
                <input
                  type="checkbox"
                  id="remember"
                  name="remember"
                  className="mr-2"
                />
                <label className="text-sm" for="remember">
                  I agree with the privacy policy
                </label>
              </div>
              <div className="flex items-center justify-center mt-8 font-bold">
                <button  className="p-0">
                  <button type="submit" className="text-white py-2 px-4 uppercase rounded bg-indigo-500 hover:bg-indigo-600 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                    create account
                  </button>
                </button>
              </div>
              <p className="mt-3 text-sm font-bold text-black">
                Already have an account?{" "}
                <Link to="/logIn" className="text-[#4F46E5]">
                  LogIn
                </Link>
              </p>
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
