  import React, { useState, useEffect } from "react";
  const port = process.env.PORT || 3000;

  const OTPVerification = ({ email }) => {
    const [otp, setOtp] = useState("");
    const[countdown, setCountdown] = useState(120);
    const [error, setError] = useState("");

    useEffect(() => {
      const timer = setInterval(() => {
        setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);

      return () => clearInterval(timer);
    }, []);

    const handleSubmit = async (event) => {
      event.preventDefault();
      console.log("data before sending:",{email,otp})
      try {
        const response = await fetch(`http://localhost:${port}/verifyOtp`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, otp }),
        });
        if (!response.ok) {
          const data = await response.json();
          console.log("data:",data);
          throw new Error("Failed to verify otp");
        }
        const data = await response.json();
        console.log("data:",data);
      } catch (error) {
        console.error("Error verifying OTP:", error);
        setError("An error occurred while verifying OTP.");
      }
    };

    const handleResend=async(event)=>{
      event.preventDefault();
      try {
        const response=await fetch(`http://localhost:${port}/resendOtp`,{
          method:"PUT",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({email})
        })
        if(!response.ok){
          const data=await response.json();
          console.log("data",data);
          throw new Error("Failed to verify otp")
        }
      } catch (error) {
        console.error("Error verifying OTP:", error);
        setError("An error occurred while verifying OTP.");
      }
    }

    return (
      <div className="container mx-auto max-w-md py-8 bg-white rounded-lg shadow-lg">
        <div className="text-center mb-4">
          <h2 className="text-3xl font-bold text-gray-800">OTP Verification</h2>
          <div className="w-20 h-1 bg-gray-800 shadow-lg mx-auto mt-2 rounded-full"></div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center border-b border-gray-300 py-2">
            <img src="" alt="" className="w-6 h-6 mr-2" />
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
            />
          </div>
          <div className="text-right mt-2">
            {countdown === 0 ? (
              <button onClick={handleResend}>Resend OTP</button>
            ) : (
              <p>Resend OTP in {countdown} seconds</p>
            )}
          </div>
          <div className="flex justify-between mt-4">
            <button
              type="submit"
              className="py-2 px-4 rounded-full text-white font-semibold bg-gray-800 hover:bg-gray-900"
            >
              Verify
            </button>
          </div>
          {error && <p className="text-red-500">{error}</p>}
        </form>
      </div>
    );
  };

  export default OTPVerification;