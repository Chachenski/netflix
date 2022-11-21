import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {UserAuth} from '../context/AuthContext';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {user, signUp} = UserAuth();
  const navigate = useNavigate();

  /* handleSubmit */
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await signUp(email, password);
      navigate('/')
    } catch (err) {
      console.log(err)
    }
  };

  return (
    <>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/5aecc44d-2a1f-4313-8399-98df20908b64/97d38c7b-3900-4bc1-9028-da65b2f1b7e8/US-en-20221114-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="/"
        />
        {/* Screen Overlay */}
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
        {/* Form Overlay */}
        <div className="fixed w-full px-4 py-24 z-50">
          {/* Signup Form */}
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-black">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text 3xl font-bold">Sign Up</h1>
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col py-4"
              >
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-3 my-2 bg-white-700 rounded"
                  type="email"
                  placeholder="Email"
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="p-3 my-2 bg-white-700 rounded"
                  type="password"
                  placeholder="Password"
                />
                <button className="bg-red-600 py-3 my-6 rounded font-bold">
                  Sign Up
                </button>
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <p>
                    <input className="mr-2" type="checkbox" />
                    Remember Me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className="py-8">
                  <span className="text-gray-600">
                    Already subscribed to Netflix?
                  </span>{" "}
                  <Link to="/login">Sign In</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup