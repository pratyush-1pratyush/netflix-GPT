import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video absolute pt-60 px-10 text-white bg-gradient-to-r from-black'>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='w-1/4 text-lg pt-10'>{overview}</p>
        <div className='pt-2'>
            <button className='bg-white text-black p-4 px-12 text-xl rounded-lg hover:bg-opacity-80'>▶Play</button>
            <button className='bg-slate-400 text-black p-4 px-12 text-xl mx-2 rounded-lg hover:bg-opacity-70'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle