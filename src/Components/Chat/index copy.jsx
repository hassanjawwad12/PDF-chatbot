import React, { useState, useRef, useEffect } from "react";
import Slider from "./Slider";
import FileSection from "./FileSection";
import {
  FiMessageSquare,
  FiSave,
  FiDollarSign,
  FiMenu,
  FiX,
} from "react-icons/fi";

import { validate } from "../../Shared/Authentication";

import Chat from "./Chat";
import "./Chat.css";
import Final from "./FileSection";

const fetchUser = async () => {
  await validate();
};

const ChatPage = () => {
  const [botres, setBotres] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [NewChat, setNC] = useState();

  
  React.useEffect(() => {
    fetchUser();
  }, []);

  React.useEffect(() => {
    console.log(NewChat);
  }, [NewChat]);

  return (
    <>
      <div className="flex lg:flex-row flex-col w-screen min-h-screen ">
        <div className="flex flex-col lg:flex-row w-full lg:w-1/2 md:min-h-screen md:max-h-screen bg-red-700 ">
          <div
            className={` ${
              isExpanded ? " lg:w-3/12 " : " lg:w-1/12 "
            } w-screen lg:h-full `}
          >
            <Slider isexp={isExpanded} setexp={setIsExpanded} NC={NewChat} />
          </div>

          <div
            className={`flex ${
              isExpanded ? " lg:w-9/12 hidden lg:block" : " lg:w-11/12 "
            } ${selectedFile ? "hidden md:block":""} bg-red-200 h-full`}
          >
            <Final
              setNC={setNC}
              selectedFile={selectedFile}
              setSelectedFile={setSelectedFile}
            />
          </div>
        </div>

        <div
          className={`lg:w-1/2 w-full md:p-4 h-screen sticky top-0 right-0 ${selectedFile ? "":"hidden md:block"}  ${
            isExpanded ? " hidden lg:block " : ""
          }`}
        >
          <Chat selectedFile={selectedFile} setSelectedFile={setSelectedFile} />
        </div>
      </div>
    </>
  );
};

export default ChatPage;
