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
  const [isComplete, setComplete] = useState(false);

  React.useEffect(() => {
    fetchUser();
  }, []);

  React.useEffect(() => {
    console.log(NewChat);
  }, [NewChat]);

  return (
    <>
      <div className="flex lg:flex-row flex-col w-screen min-h-screen max-h-screen">
        <div
          className={` ${
            isExpanded ? " lg:w-[10%] " : " lg:w-[5%] "
          } w-screen  lg:h-screen `}
        >
          <Slider isexp={isExpanded} setexp={setIsExpanded} NC={NewChat} isComp={isComplete} setComp={setComplete} />
        </div>

        <div
            className={`flex
            ${isComplete ? "hidden w-0 h-0" : `bg-red-200 h-full ${isExpanded ? "lg:w-[45%] hidden lg:block" : "lg:w-[47.5%]"} ${selectedFile ? "hidden md:block" : ""}`}`
          }          
          >
            <Final
              setNC={setNC}
              selectedFile={selectedFile}
              setSelectedFile={setSelectedFile}
              isComp={isComplete} setComp={setComplete}
            />
          </div>

        <div
          className={` w-full md:p-4 h-screen sticky top-0 right-0 ${
            selectedFile ? "" : "hidden md:block"
          }  ${isExpanded ? " hidden lg:block lg:w-[45%] " : " lg:w-[47.5%] "}
          ${isComplete ? "lg:w-full" : ""}`}
        >
          <Chat selectedFile={selectedFile} setSelectedFile={setSelectedFile}  />
        </div>
      </div>
    </>
  );
};

export default ChatPage;
//