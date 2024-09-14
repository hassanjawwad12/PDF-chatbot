import { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import {
  validate,
  google_login,
  microsoft_login,
  forgotpassword,
  login,
} from "../../Shared/Authentication";
import {FcGoogle} from 'react-icons/fc'
import Swal from "sweetalert2";


const MicrosoftLogo='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="64" height="64"><path d="M0 0h15.206v15.206H0z" fill="#f25022"/><path d="M16.794 0H32v15.206H16.794z" fill="#7fba00"/><path d="M0 16.794h15.206V32H0z" fill="#00a4ef"/><path d="M16.794 16.794H32V32H16.794z" fill="#ffb900"/></svg>';

const Login = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [InputEmail, setInputEmaill] = useState("");
  const [InputPass, setInputPass] = useState("");

  async function loginSupabase() {


    if (!isValidEmailFormat(InputEmail)) {
      Swal.fire({
        title: "Error",
        text: "Please enter a valid email address",
        icon: "warning",
        confirmButtonText: "OK",
      });
      return;
    }

    setIsLoading(true);

    const status = await login({ email: InputEmail, pass: InputPass });
    console.log("Status : " + status);

    setIsLoading(false);

    if (status.statuscode === 200) {
      Swal.fire({
        title: "Success",
        text: "Signed in Successfully",
        icon: "success",
        confirmButtonText: "OK",
      }).then(function () {
        window.location.href = "/";
      });
    } else if (status.statuscode === 400) {
      Swal.fire({
        title: "Failure",
        text: status.err,
        icon: "error",
        confirmButtonText: "OK",
      });
    } else {
      Swal.fire({
        title: "Failure",
        text: "Something went wrong",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  }

  function LoginFunction() {
    if (InputEmail.length < 10 || InputPass.length < 8) {
      Swal.fire({
        title: "Error",
        text: "Please fill all the fields",
        icon: "warning",
        confirmButtonText: "OK",
      });
    } else {
      loginSupabase();
    }
  }

  async function gl() {
    await google_login();
  }

  function fp() {
    setIsLoading(true);

    if (InputEmail.length < 10) {
      alert("Please enter a valid email address");
      setIsLoading(false);
      return;
    }

    forgotpassword(InputEmail);

    setIsLoading(true);
  }

  const isValidEmailFormat = (email) => {
    const emailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

    

  return (
    <div className="min-h-screen  bg-white">
      <button className="mb-6 w-full flex justify-center items-center pt-14 space-x-5 bg-gradient-to-t from-white via-[#7f18ef]/40 to-[#C9EEFF]/80 ">
        <img
          src='logo.png'
          className="w-16"
        />
        <h2
          className="font-heading font-bold lg:text-6xl text-5xl"
        >
          Yadoc
        </h2>
      </button>

      <div className="flex flex-col md:flex-row ">
        <div className="md:w-1/2 p-8 text-gray-500 md:flex items-center justify-center">
          <div className="md:w-2/3">
            <h2 className="text-4xl font-extrabold mb-10 flex justify-center text-gray-900 ">Login</h2>
            <div className="flex justify-center space-x-5 mb-4">
              <button className="p-1 rounded-lg border border-gray-500" onClick={gl}>
                <FcGoogle className="w-12 h-12"/>
              </button>
              <button className="p-1 rounded-lg  border border-gray-500" onClick={microsoft_login}>
                <img src='./Microsoft.svg' className='w-12 h-12'/>
              </button>
            </div>
            <div className="mb-2">
              <label htmlFor="email" className="block text-lg font-medium mb-4 ">Email:</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email address"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
                onChange={(e) => {
                  setInputEmaill(e.target.value);
                }}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="password" className="block text-lg font-medium mb-4">Password:</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                onChange={(e) => {
                  setInputPass(e.target.value);
                }}
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>

            <button
              type="button"
              className="bg-teal-300 hover:bg-teal-800 hover:font-extrabold text-white font-bold py-3 px-4 rounded disabled:opacity-50 disabled:pointer-events-none w-full mb-4 mt-6"
              disabled={isLoading}
              onClick={LoginFunction}
            >
              {isLoading ? (
                <FaSpinner className="animate-spin inline-block mr-2" />
              ) : null}
              {isLoading ? "Loading..." : "Sign In"}
            </button>

            <button
              type="button"
              className="bg-teal-300 hover:bg-teal-800 hover:font-extrabold text-white font-bold py-3 px-4 rounded disabled:opacity-50 disabled:pointer-events-none w-full mb-4 mt-2"
              disabled={isLoading}
              onClick={fp}
            >
              {isLoading ? (
                <FaSpinner className="animate-spin inline-block mr-2" />
              ) : null}
              {isLoading ? "Loading..." : "Forgot Password"}
            </button>
            <div className="flex flex-col w-full items-center justify-center">
              <span className=" text-bold text-lg text-gray-500">
                Don't have a Account?{"  "}
              </span>
              <a
                className="text-purple-800 hover:text-blue-600 text-extrabold text-lg"
                href="/signup"
              >
                Signup
              </a>
            </div>
          </div>
        </div>
        <div className="hidden md:block md:w-1/2">
          <img src='signin.jpg' alt="Your Image" className="w-full h-full " />
        </div>
      </div>
    </div>
  );
};

export default Login;