import React from "react";
import { useState, useRef, useEffect } from "react";
import { AiOutlineLoading, AiOutlineLock } from "react-icons/ai";
import axios from "axios";
import { validate } from "../../Shared/Authentication";

const Backend = import.meta.env.VITE_BACKEND;

async function GetRequest(query) {
  try {
    let access_token = (await validate()).access_token;
    const resp = await axios.post(`${Backend}/chat`, { access_token, query });
    let data = resp.data.output.text; 
    return data;//.replace(/\n/g, "<br>");
  } catch (err) {
    console.log(err);
  }
  return [];
}

const Chat = (props) => {
  const [messages, setMessages] = useState([]);
  const chatBoxRef = useRef(null);
  const [botres, setBotres] = useState("");
  const messageInputRef = useRef(null);
  const isRightAlignedRef = useRef(true);
  const [Summary, setSQA] = useState(false);
  const [SummaryGen, setSG] = useState(false);

  

  const handleMessageSubmit = async (e) => {
    e.preventDefault();
    const message = messageInputRef.current.value;
    if (message.trim() !== "") {
      const sender = "User";
      addMessage(sender, message);
      messageInputRef.current.value = "";
      const responsetext = await GetRequest(message);
      setBotres(responsetext);
      addMessage("Bot", responsetext);
    }
    
  };

  const AskSummary = async (e) => {
    setSQA(true);
    const message = "Can you please Summarize it briefly in French?  Also Add 3 Questions from the text with Proper Formatting in French. ";
    if (message.trim() !== "") {
      const sender = "User";
      messageInputRef.current.value = "";

      // Send the user message to the GPT API
      const responsetext = await GetRequest(message);

      // Add the GPT response to the chat

      setBotres(responsetext);
      addMessage("Bot", responsetext);
    }
    setSG(true);
  };

  const addMessage = (sender, text) => {
    let isRightAligneds = true;
    if (sender == "Bot") {
      isRightAligneds = false;
    }
    const newMessage = {
      sender,
      text,
      isRightAligned: isRightAligneds,
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };



  return (
    <>
      <div className="flex flex-col w-full h-full bg-white ">
        {props.selectedFile != null && SummaryGen == true ? (
          <div
            className="flex-grow p-4 overflow-y-scroll"
            id="chatBox"
            ref={chatBoxRef}
          >
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-4 w-full flex ${
                  message.isRightAligned ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`${
                    message.isRightAligned
                      ? "bg-gray-500 rounded-2xl"
                      : "bg-pink-200 rounded-2xl"
                  }`}
                >
                  <p
                    className={`chat-message px-4 py-2 ${
                      message.isRightAligned ? "text-white" : "text-black"
                    }`}
                  >
                    {message.text.split('\n').map((item, index) => <React.Fragment key={index}>{item}<br/></React.Fragment>)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            <div className="flex-grow p-4 overflow-y-scroll flex items-center justify-center ">
              {SummaryGen == false && Summary == true ? (
                <AiOutlineLoading className="animate-spin text-3xl" />
              ) : (
                ""
              )}
            </div>
          </>
        )}

        <form
          className="p-4 flex fixed bottom-0 w-full md:relative"
          onSubmit={handleMessageSubmit}
        >
          <input
            type="text"
            className="message-input w-full rounded border border-gray-300 px-4 py-2 hover:border-[#7f18ef]/40"
            placeholder="Type your message here..."
            ref={messageInputRef}
          />
          <button
            className="send-button bg-gray-500  hover:bg-gray-700  text-white rounded px-4 py-2 ml-2"
            disabled={props.selectedFile == null ? true : false}
          >
            {Summary == false && props.selectedFile ? AskSummary() : ""}
            {props.selectedFile == null || Summary == false ? (
              <AiOutlineLock className=" text-2xl" />
            ) : (
              "Send"
            )}
          </button>
        </form>
      </div>
    </>
  );
};

export default Chat;
