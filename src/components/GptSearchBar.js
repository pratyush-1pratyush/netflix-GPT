import React from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {
  const langkey = useSelector((store) => store.langConfig.lang)
  console.log(langkey);
  return (
    <div className='flex justify-center pt-[10%]'>
       <form className='bg-black w-1/2 grid grid-cols-12'>
          <input className='p-4 m-4 col-span-9' type="text" placeholder={lang[langkey].gptSearchPlaceholder}></input>
          <button className='text-white m-4 py-2 px-4 col-span-3 bg-red-700 rounded-lg'>{lang[langkey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar