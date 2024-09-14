import React from 'react'

function SingleContent(props) {
  return (
    <div class='flex flex-col md:flex-row w-screen items-center '>
        <div class='flex flex-col w-full space-y-3 p-4 md:p-16'>
            <text class='font-heading  font-bold text-center text-2xl '>{props.obj.title}</text>
            <text class=' text-gray-400 text-center text-xl'>{props.obj.desc}</text>
        </div>
        <div class='flex w-full justify-center items-center'>
            <img src={props.obj.picture}/>
        </div>
    </div>
  )
}

export default SingleContent