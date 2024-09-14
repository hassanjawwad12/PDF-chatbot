import React, { useState ,useEffect} from "react";
import { FiMessageSquare, FiMenu, FiX } from "react-icons/fi";
import { IoIosAdd } from "react-icons/io";
import { BiSolidEditAlt } from "react-icons/bi";
import { AiFillDelete, AiOutlineLogout, AiOutlineUser } from "react-icons/ai";
import { FaSpinner } from "react-icons/fa";
import { validate } from "../../Shared/Authentication";
import axios from "axios";
import supabase from "../../Shared/Supabase";
import HandleEdit from "./HandleEdit";

const Backend = import.meta.env.VITE_BACKEND;

async function GetAllChats() {
  try {
    let access_token = (await validate()).access_token;
    const resp = await axios.post(`${Backend}/GetAllChats`, { access_token });
    console.log(resp.data);

    return resp.data.sort((a, b) => b.id - a.id);
  } catch (err) {
    console.log(err);
  }
  return [];
}

async function DelChat(ChatID) {
  try {
    let access_token = (await validate()).access_token;
    axios.post(`${Backend}/DelChat`, { access_token, ChatID });
  } catch (err) {
    console.log(err);
  }
}

const Slider = (props) => {
  console.log("Slider");

  //let isComplete = props.isComp;
 // let setComplete = props.setComp;

  let isExpanded = props.isexp;
  const toggleSlider = () => {
    props.setexp(!isExpanded);
  };

  const [CheckNC, setCheckNC] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  if (props.NC != null && CheckNC == false) {
    setChatHistory([props.NC[0], ...chatHistory]);
    setCheckNC(true);
  }

  React.useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const chats = await GetAllChats();
      setChatHistory(chats);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const deleteChatFromState = (id) => {
    const updatedChatHistory = chatHistory.filter((chat) => chat.id !== id);
    setChatHistory(updatedChatHistory);
  };

  async function handleDeleteClick(ChatID) {
    await   DelChat(ChatID);
    deleteChatFromState(ChatID);
  }

  function handleNewChatClick() {
    window.location.reload();
  }

  async function handlesignout() {
    await supabase.auth.signOut();
    window.location.reload();
  }

  useEffect(() => {
    console.log(props.isComp)
    }, [props.isComp]);
    
  return (
    <>
      <div
        className={`flex lg:flex-col flex-row items-center justify-between top-0 left-0 lg:h-full  bg-gray-800 text-white duration-300 z-20   ${
          isExpanded ? "lg:w-full w-full h-screen" : "lg:w-30 sm:w-full"
        }`}
      >
        <div
          className="flex justify-center items-center h-16 cursor-pointer w-auto lg:w-full px-4"
          onClick={toggleSlider}
        >
          {isExpanded ? (
            <div className=" absolute top-0 mt-6 flex items-center justify-center lg:ml-1 ml-64">
              <FiX className="text-white text-3xl" />
            </div>
          ) : (
            <FiMenu />
          )}
        </div>

        {isExpanded ? (
          <>
            <div className="md:flex items-center justify-center w-full text-wrap h-full mt-4 overflow-y-auto rounded-md p-4 mb-4 lg:block hidden ">
              <h1 className="text-white font-bold text-center text-lg mb-3 md:hidden">
                Chat History
              </h1>

              {isLoading ? (
                <div className="flex flex-col items-center justify-center h-full">
                  <FaSpinner className="text-3xl animate-spin items-center justify-center " />
                </div>
              ) : (
                <>
                  {console.log("Chat History")}
                  {console.log(chatHistory)}
                  <div className="lg:block md:hidden">
                  <HandleEdit chatHistory={chatHistory} DeleteFN={handleDeleteClick} isComp={props.isComp} setComp={props.setComp} />
                  </div>
                </>
              )}
            </div>

            <div className="flex flex-col ml-2 lg:mr-2 mr-36 justify-center items-center">
              <button
                className="flex flex-row text-white justify-center items-center rounded bg-gray-500 mb-2 cursor-pointer transition duration-300 hover:bg-gray-600 w-full h-16"
                onClick={handleNewChatClick}
              >
                <span className="ml-2  p-2">New Chat</span>
                <span className="w-10 font-bold size-2xl">
                  <IoIosAdd className="w-8 h-8" />
                </span>
              </button>

              <button className="flex flex-row text-white justify-center items-center rounded bg-gray-500 mb-2 cursor-pointer transition duration-300 hover:bg-gray-600 w-full h-16">
                <span className="ml-2 mr-2 p-2">Profile</span>
                <div className="w-10 font-bold size-2xl">
                  <AiOutlineUser />
                </div>
              </button>

              <button
                className="flex flex-row text-white justify-center items-center rounded bg-gray-500 mb-2 cursor-pointer transition duration-300 hover:bg-gray-600 w-full h-16"
                onClick={handlesignout}
              >
                <span className="ml-2 mr-2 p-2">Logout</span>
                <div className="w-10 font-bold size-2xl">
                  <AiOutlineLogout />
                </div>
              </button>
            </div>
          </>
        ) : (
          <>
            {isLoading ? (
              <div className="hidden md:flex flex-col items-center justify-center">
                <FaSpinner className="text-3xl animate-spin" />
              </div>
            ) : (
              <>
                <div className="w-full text-wrap h-full mt-4 overflow-y-auto rounded-md p-4 mb-4 lg:block hidden  items-center justify-center">
                  {chatHistory
                    ? chatHistory.map((chat, index) => (
                        <div
                          key={index}
                          className="mb-4 flex flex-col justify-center items-center"
                        >
                          <button className="flex justify-center items-center h-10 w-12 p-4 rounded bg-gray-500 mb-2 cursor-pointer transition duration-300 hover:bg-gray-600">
                            <p className="text-sm flex flex-row w-full h-full justify-center items-center">
                              <span className="font-semibold">
                                <FiMessageSquare />
                              </span>
                            </p>
                          </button>
                        </div>
                      ))
                    : null}
                </div>
              </>
            )}

            <div className="flex lg:flex-col flex-row lg:ml-1 items-start justify-start">
              <button
                className=" mr-2 flex justify-center items-center h-10 w-10 rounded-full bg-gray-500 mb-2 cursor-pointer transition duration-300 hover:bg-gray-600"
                onClick={handleNewChatClick}
              >
                <IoIosAdd className="w-6 h-6" />
              </button>

              <span className="mr-2 flex md:flex-col flex-row justify-center items-center h-10 w-10 rounded-full bg-gray-500 mb-2 cursor-pointer transition duration-300 hover:bg-gray-600 ">
                <AiOutlineUser />
              </span>

              <button
                className="mr-2 flex justify-center items-center h-10 w-10 rounded-full bg-gray-500 mb-2 cursor-pointer transition duration-300 hover:bg-gray-600"
                onClick={handlesignout}
              >
                <AiOutlineLogout />
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Slider;
