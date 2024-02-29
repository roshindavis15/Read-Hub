import React, { useState } from "react";


const SignupLoginForm = () => {
  const [action, setAction] = useState("Sign Up");
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [mobile,setMobile]=useState("");
  const [password,setPassword]=useState("");
  const [error,setError]=useState("");
  
  const handleSubmit=async(event)=>{
    event.preventDefault();

    const response =await fetch("/register",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({name,email,mobile,password})
    });
    const data=await response.json();
    
    if(response.ok){
      console.log("connected with backend");
    }else{
      setError(data.message);
    }
  };

  return (
    <div className="container mx-auto max-w-md py-8 bg-white rounded-lg shadow-lg">
      <div className="text-center mb-4">
        <h2 className="text-3xl font-bold text-gray-800">{action}</h2>
        <div className="w-20 h-1 bg-gray-800 shadow-lg mx-auto mt-2 rounded-full"></div>
      </div>
      <div className="space-y-4">
        {action === "Sign Up" && (
          <>
          <div className="flex items-center border-b border-gray-300 py-2">
            <img src="" alt="" className="w-6 h-6 mr-2" />
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(event)=>setName(event.target.value)}
              className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
            />
           
          </div>
           <div className="flex items-center border-b border-gray-300 py-2">
           <img src="" alt="" className="w-6 h-6 mr-2" />
           <input
             type="text"
             placeholder="Mobile"
             value={mobile}
             onChange={(event)=>setMobile(event.target.value)}
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
            onChange={(event)=>setEmail(event.target.value)}
            className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
          />
        </div>
       
        <div className="flex items-center border-b border-gray-300 py-2">
          <img src="" alt="" className="w-6 h-6 mr-2" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event)=>setPassword(event.target.value)}
            className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
          />
        </div>
      </div>
      {action === "Login" && (
        <div className="text-right mt-2">
          <span className="text-sm text-gray-500 cursor-pointer">Lost Password? Click Here!</span>
        </div>
      )}
      <div className="flex justify-between mt-4">
        <button
          className={`py-2 px-4 rounded-full text-white font-semibold ${
            action === "Sign Up" ? "bg-gray-800 hover:bg-gray-900" : "bg-gray-600 hover:bg-gray-800"
          }`}
          onClick={() => setAction("Sign Up")}
        >
          Sign Up
        </button>
        <button
          className={`py-2 px-4 rounded-full text-white font-semibold ${
            action === "Login" ? "bg-gray-800 hover:bg-gray-900" : "bg-gray-600 hover:bg-gray-800"
          }`}
          onClick={() => setAction("Login")}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default SignupLoginForm;