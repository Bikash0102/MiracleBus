import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useSignup from '../hooks/useSignup';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
 
  const { loading, signup,navigation} = useSignup(); // Note the parentheses to call the hook function

  const navigate = useNavigate(); 
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    console.log(inputs); // Verify inputs are captured correctly
 
    // Call the signup function with inputs
    await signup(inputs); // Call the signup function with inputs
    console.log(navigation);
    if (navigation) {
   
      // Navigate to login page if signup was successful
      navigate('/Login');
    }
    
  };
 

  return (
    <div>
      <div className="h-full w-full bg-gray-400 dark:bg-gray-900">
        {/* Container */}
        <div className="mx-auto">
          <div className="flex justify-center px-1 py-12">
            {/* Row */}
            <div className="w-full xl:w-3/4 lg:w-11/12 flex">
              {/* Col */}
              <div className="w-full h-auto bg-gray-400 dark:bg-gray-800 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
                style={{ backgroundImage: "url('https://img.freepik.com/free-photo/urban-transport-paper-style-arrangement_23-2149003864.jpg?t=st=1721043530~exp=1721047130~hmac=22ed9c6ac1b3c3e7830741fbad8de617fbe7d215d07c834db7d0997368d0a6e9&w=740')" }}>
              </div>
              {/* Col */}
              <div className="w-full lg:w-7/12 bg-white dark:bg-gray-700 p-5 rounded-lg lg:rounded-l-none">
                <h3 className="py-4 text-2xl text-center text-gray-800 dark:text-white">Create an Account!</h3>
                <form className="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded" onSubmit={handleSubmit}>
                  <div className="mb-4 md:flex md:justify-between">
                    <div className="mb-4 md:mr-2 md:mb-0">
                      <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="firstName">
                        First Name
                      </label>
                      <input
                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="firstName"
                        type="text"
                        placeholder="First Name"
                        value={inputs.firstName}
                        onChange={(e) => setInputs({ ...inputs, firstName: e.target.value })}
                      />
                    </div>
                    <div className="md:ml-2">
                      <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="lastName">
                        Last Name
                      </label>
                      <input
                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="lastName"
                        type="text"
                        placeholder="Last Name"
                        value={inputs.lastName}
                        onChange={(e) => setInputs({ ...inputs, lastName: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="email"
                      type="email"
                      placeholder="Email"
                      value={inputs.email}
                      onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
                    />
                  </div>
                  <div className="mb-4 md:flex md:justify-between">
                    <div className="mb-4 md:mr-2 md:mb-0">
                      <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="password">
                        Password
                      </label>
                      <input
                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="******************"
                        value={inputs.password}
                        onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                      />
                    </div>
                    <div className="md:ml-2">
                      <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="c_password">
                        Confirm Password
                      </label>
                      <input
                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="c_password"
                        type="password"
                        placeholder="******************"
                        value={inputs.confirmPassword}
                        onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="mb-6 text-center">
                    <button
                      className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline"
                      type="submit" // Change type to submit
                    >
                      Register Account
                    </button>
                  </div>
                  <hr className="mb-6 border-t" />
                  <div className="text-center">
                    <Link to="/Login">
                      <a className="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800" href="./index.html">
                        Already have an account? Login!
                      </a>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
