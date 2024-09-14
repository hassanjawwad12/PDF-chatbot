import { useState } from "react";
import {
  validate,
  google_login,
  microsoft_login,
  signup,
} from "../../Shared/Authentication";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";

const Signup = () => {
  const [InputEmail, setInputEmaill] = useState("");
  const [InputPass, setInputPass] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");

  async function gl() {
    await google_login();
  }

  async function SignupSupabase() {
    const status = await signup({
      email: InputEmail,
      pass: InputPass,
      name: FirstName + " " + LastName,
    });
    if (status) {
      console.log(status);
    }
    // if (data) {
    //   console.log(data);
    //   if (data.user == null) {
    //     Swal.fire({
    //       title: "Failure",
    //       text: "Incorrect Email or Password",
    //       icon: "error",
    //       confirmButtonText: "OK",
    //     });
    //   } else {
    //     Swal.fire({
    //       title: "Success",
    //       text: "Confirm your Email from your account",
    //       icon: "success",
    //       confirmButtonText: "OK",
    //     }).then(function () {
    //       window.location.replace("/login");
    //     });
    //   }
    // } else {
    //   Swal.fire({
    //     title: "Failure",
    //     text: error.message,
    //     icon: "error",
    //     confirmButtonText: "OK",
    //   });
    // }
  }

  const isValidEmailFormat = (email) => {
    const emailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  function SignupFunction() {
    if (!isValidEmailFormat(InputEmail)) {
      Swal.fire({
        title: "Error",
        text: "Please enter a valid email address",
        icon: "warning",
        confirmButtonText: "OK",
      });
      return;
    }

    if (
      InputEmail == "" ||
      InputPass == "" ||
      FirstName == "" ||
      LastName == ""
    ) {
      Swal.fire({
        title: "Error",
        text: "Please fill all the fields",
        icon: "warning",
        confirmButtonText: "OK",
      });
    } else {
      SignupSupabase();
    }
  }

  return (
    <div className="min-h-screen max-h-screen bg-white">
      <button className="mb-6 w-full flex justify-center items-center pt-14 space-x-5 bg-gradient-to-t from-white via-[#7f18ef]/40 to-[#C9EEFF]/80 ">
        <img src="logo.png" className="w-16" />
        <h2 className="font-heading font-bold lg:text-6xl text-5xl">Yadoc</h2>
      </button>

      <div className="flex flex-col md:flex-row ">
        <div className="md:w-1/2 p-8 text-gray-500 md:flex items-center justify-center">
          <div className="md:w-2/3">
            <h2 className="text-4xl font-extrabold mb-10 flex justify-center text-gray-900 ">
              Create Account
            </h2>

            <div className="flex justify-center space-x-5 mb-8">
              <button
                className="p-1 rounded-lg border border-gray-500"
                onClick={gl}
              >
                <FcGoogle className="w-12 h-12" />
              </button>
              <button
                className="p-1 rounded-lg  border border-gray-500"
                onClick={microsoft_login}
              >
                <img src="./Microsoft.svg" className="w-12 h-12" />
              </button>
            </div>

            <div className="flex space-x-2 mb-4 w-full">
              <div className="w-1/2">
                <label
                  htmlFor="FirstName"
                  className="block text-lg font-medium  "
                >
                  First Name:
                </label>
                <input
                  type="text"
                  id="firstname"
                  placeholder="Enter your first name"
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="email" className="block text-lg font-medium  ">
                  Last Name:
                </label>
                <input
                  type="text"
                  id="lastname"
                  placeholder="Enter your last name"
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-lg font-medium  ">
                Email:
              </label>
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
            <div className="mb-4">
              <label htmlFor="password" className="block text-lg font-medium ">
                Password:
              </label>
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
              className="bg-teal-300 hover:bg-teal-800 hover:font-extrabold text-white font-bold py-3 px-4 rounded disabled:opacity-50 disabled:pointer-events-none w-full mb-4 mt-2"
              onClick={SignupFunction}
            >
              Sign Up
            </button>
            <div className="flex flex-col w-full items-center justify-center">
              <span className=" text-bold text-lg text-gray-500">
                Already have an account?{"  "}
              </span>
              <a
                className="text-purple-800 hover:text-blue-600 text-extrabold text-lg"
                href="/login"
              >
                Login
              </a>
            </div>
          </div>
        </div>

        <div className="hidden md:block md:w-1/2">
          <img src="signin.jpg" alt="Your Image" className="w-full h-full " />
        </div>
      </div>
    </div>
  );
};

export default Signup;

/* <div className="text-white text-center flex flex-col">
          <span className="text-gray-900 text-bold">
            Already have an account?{" "}
          </span>
          <a
            className="text-purple-800 hover:text-blue-600 text-bold"
            href="/login"
          >
            Login
          </a>
        </div> */
