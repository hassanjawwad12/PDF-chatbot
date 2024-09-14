
import { AiOutlineDollarCircle } from "react-icons/ai";
import React from "react";

const Dashboard = () => {

    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [newPassword, setNewPassword] = React.useState("");
    const [date, setDate] = React.useState("");
    const [doc, setDoc] = React.useState("");
    const [plan, setPlan] = React.useState("");
    const [token, setToken] = React.useState("");
  

  return (

    <div className="bg-white h-screen w-screen flex flex-col items-center justify-center relative">
        
          <div className="flex items-center justify-center flex-col bg-gray-300 hover:bg-gray-400 hover:font-extrabold  w-2/3  lg:p-5 p-4 rounded-md shadow-md lg:mt-2 mt-20">
        <div className="flex mr-2 ml-2 md:flex-row flex-col">
            <div className=" mb-4">
              <h1
                className=" text-gray-700 font-bold mb-2">
                Name
              </h1>
              <input
                className=" w-full p-2 border border-gray-300 rounded " 
                onChange={(e) => {
                    setName(e.target.value);
                  }}       
              />
            </div>

            <div className="lg:ml-6 mb-4">
              <h1
                className=" text-gray-700 font-bold mb-2"  
              >
                Email
              </h1>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded"
                onChange={(e) => {setEmail(e.target.value);}}
               
              />
            </div>
          </div>
          <div className="flex items-stretch mr-2 ml-2 md:flex-row flex-col">
            <div className="mb-4">
              <h1
                className=" text-gray-700 font-bold mb-2"
                >
                Password
              </h1>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded "
                onChange={(e) => {setPassword(e.target.value);}}
                
              />
            </div>
            <div className=" lg:ml-6 mb-4">
              <h1
                className=" text-gray-700 font-bold mb-2"
                 >
                Change Password
              </h1>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded"
                onChange={(e) => {setNewPassword(e.target.value);}}
                
              />
            </div>
          </div>
          </div>

          <div className="flex items-center justify-center flex-col bg-gray-300 hover:bg-gray-400 hover:font-extrabold w-2/3  p-4 rounded-md shadow-md mt-4">
            <h1 className="text-2xl text-black flex justify-center mb-4 font-bold">Subscription Details</h1>
        <div className="flex items-stretch mr-2 ml-2 md:flex-row flex-col">
            <div className="mb-4">
              <h1
                className="block text-gray-700 font-bold mb-2"
            
              >
                Plan Paid 
              </h1>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded" 
                onChange={(e) => {setPlan(e.target.value);}}       
              />
            </div>

            <div className="mb-4 lg:ml-6">
              <h1
                className=" text-gray-700 font-bold mb-2"  
              >
                Subscription Date
              </h1>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded"
                onChange={(e) => {setDate(e.target.value);}}
               
              />
            </div>
          </div>
          <div className="flex items-stretch mr-2 ml-2 md:flex-row flex-col ">
            <div className="mb-4">
              <h1
                className=" text-gray-700 font-bold mb-2"
                >
                Documents Uploaded 
              </h1>
              <input
                className=" w-full px-3 py-2 border border-gray-300 rounded "
                onChange={(e) => {setDoc(e.target.value);}}
                
              />
            </div>
            <div className="mb-4 lg:ml-6">
              <h1
                className=" text-gray-700 font-bold mb-2"
                 >
                Tokens Left 
              </h1>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded"
                onChange={(e) => {setToken(e.target.value);}}
                
              />
            </div>
          </div>
          </div>

          <div className="flex flex-row shadow-lg mt-8  text-black justify-center items-center rounded  cursor-pointer transition duration-300 bg-red-200 h-10 w-1/4 hover:bg-red-500">
          <span className="ml-2 font-extrabold  p-2">Billing</span>
          <span className="w-10 font-bold text-green-700">
            <AiOutlineDollarCircle className="lg:w-8 w-7 h-8 " />
          </span>
        </div>
      
    </div>
  )
}

export default Dashboard;
