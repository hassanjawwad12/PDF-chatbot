import React, { useEffect, useState } from "react";
import { BiSolidEditAlt } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";

const HandleEdit = (props) => {
  const [editedChatIndex, setEditedChatIndex] = useState(null);
  const [chatHistory, setChatHistory] = useState(props.chatHistory);

  const handleEditButtonClick = (index) => {
    setEditedChatIndex(index);
  };

  useEffect(() => {
  console.log(props.isComp)
  }, [props.isComp]);
  
  
  const handleKeyDown = (e, index) => {
    if (e.key === "Enter") {
      const updatedChatHistory = [...chatHistory];
      updatedChatHistory[index].ChatName = e.target.value;
      setChatHistory(updatedChatHistory);
      setEditedChatIndex(null);
    }
  };

  return (
    <>
      {chatHistory.map((chat, index) => (
        <div key={index} className="mb-4">
          <div className="border border-r rounded-md border-r-white-600 p-2  shadow-md hover:bg-gray-700 flex flex-col">
            <div className="flex flex-col w-full">
              {editedChatIndex === index ? (
                <div className="flex flex-row items-center justify-center  w-full ">
                  <input
                    type="text"
                    defaultValue={chat.ChatName}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    className="font-bold text-center text-white bg-black w-full "
                  />
                </div>
              ) : (
                <button className="font-bold text-center truncate"
                onClick={() => {

                  if (chat.Status === "Complete") {
                   props.setComp(true);
                    
                  }
                }}              
                >
                  {chat.ChatName}
                 
                  </button>

              )}
              <div className="flex flex-row items-center justify-center w-full pt-2">
                {!editedChatIndex && (
                  <button
                    className="h-8 w-8 rounded-full bg-gray-500 inline-block ml-2 mr-2 hover:bg-blue-600"
                    onClick={() => handleEditButtonClick(index)}
                  >
                    <BiSolidEditAlt className="inline-block" />
                  </button>
                )}
                <button
                  className="h-8 w-8 rounded-full bg-gray-500 inline-block hover:bg-blue-600"
                  onClick={() => {
                    console.log("The Chat to Delete : "+chat.id);
                    props.DeleteFN(chat.id);
                    
                  }}
                >
                  <AiFillDelete className="inline-block" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default HandleEdit;


/*
 {chat.status === "Complete" && props.setComp(true)}
                */