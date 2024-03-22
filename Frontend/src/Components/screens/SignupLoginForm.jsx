import React, { useState } from "react";
import OtpVerification from './OtpVerification'; 
const port = process.env.PORT || 3000;
import {useDispatch} from 'react-redux';
import { loginSuccess,loginFailure } from "../../../redux/actions/authAction";




const SignupLoginForm = () => {
  const [mode, setMode] = useState("signup");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isRegistered, setIsRegistered] = useState(false); // State to track registration status
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
  const dispatch=useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Data before sending:", { name, email, mobile, password });

    let url=`http://localhost:${port}/login`;
    if(mode === "signup"){
      url=`http://localhost:${port}/register`
    }
  
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, mobile, password }),
      });

      const responseData = await response.json();
  
      if (!response.ok) {
        setError(responseData.message);
        return; // Stop execution if there's an error
      }
  
      console.log("Data from backend:", responseData);
  
      if (response.ok) {
        console.log("Connected with backend");
        setIsRegistered(true); // Set isRegistered to true after successful registration
        if (mode === "login") {
          setIsLoggedIn(true); // Set isLoggedIn to true after successful login
          localStorage.setItem('authToken', responseData.token);
          dispatch(loginSuccess(responseData.token));
      
        }
      }
    } catch (error) {
      console.error("Error in handleSubmit:", error);
      setError("An error occurred while submitting the form.");
      dispatch(loginFailure(error.message));
    }
  };

  return (
    <div className="container mx-auto max-w-md py-8 bg-white rounded-lg shadow-lg">
      {error && (//render error message if error state is not empty
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <strong className="font-bold">Error:</strong>
        <span className="block sm:inline"> {error}</span>
      </div>
      )}
      {!isRegistered && !isLoggedIn ? ( // Render signup/login form if not registered and not logged in
        <div>
          <div className="text-center mb-4">
            <h2 className="text-3xl font-bold text-gray-800">Sign {mode === "signup" ? "Up" : "In"}</h2>
            <div className="w-20 h-1 bg-gray-800 shadow-lg mx-auto mt-2 rounded-full"></div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === "signup" && (
              <>
                <div className="flex items-center border-b border-gray-300 py-2">
                  <img src="" alt="" className="w-6 h-6 mr-2" />
                  <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
                  />
                </div>
                <div className="flex items-center border-b border-gray-300 py-2">
                  <img src="" alt="" className="w-6 h-6 mr-2" />
                  <input
                    type="text"
                    placeholder="Mobile"
                    value={mobile}
                    onChange={(event) => setMobile(event.target.value)}
                    className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
                  />
                </div>
              </>
            )}
            <div className="flex items-center border-b border-gray-300 py-2">
              <img src="" alt="" className="w-6 h-6 mr-2" />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
              />
            </div>
            <div className="flex items-center border-b border-gray-300 py-2">
              <img src="" alt="" className="w-6 h-6 mr-2" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
              />
            </div>
            <div className="flex justify-between mt-4">
              <label className="cursor-pointer">
                <input
                  type="radio"
                  value="signup"
                  checked={mode === "signup"}
                  onChange={() => setMode("signup")}
                />                                                                                    
                <span className="ml-2">Sign Up</span>
              </label>
              <label className="cursor-pointer">
                <input
                  type="radio"
                  value="login"
                  checked={mode === "login"}
                  onChange={() => setMode("login")}
                />
                <span className="ml-2">Login</span>
              </label>
            </div>
            <button
              type="submit"
              className="py-2 px-4 rounded-full text-white font-semibold bg-gray-800 hover:bg-gray-900"
            >
              {mode === "signup" ? "Sign Up" : "Login"}
            </button>
          </form>
        </div>
      ) : (                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
        <div>
          {mode === "signup" ? (
            <OtpVerification email={email} /> // Render OtpVerification component after successful signup
          ) : (
            <div>
              {/* Render any component you want for post-login experience */}
              <h2>Welcome, {email}!</h2>
              {/* You can add more content here */}
            </div>
          )}
        </div>
      )}
    </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
  );
};

export default SignupLoginForm;