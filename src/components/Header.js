import React from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import {auth} from "../utils/Firebase"
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { useEffect } from 'react';
import { lang_supported, logo_netflix } from '../utils/Constants';
import { toggleGptSearchView } from '../utils/GptSearchSlice';
import { changeLanguage } from '../utils/langConfigSlice';


const Header = () => {
  const user = useSelector((store) => store.user)
  const showGptSearch = useSelector((store) => store.Gpt.setGptSearch)
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    
    }).catch((error) => {
      // An error happened.
      navigate("/errorPage")
    });
  }

  useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth,(user) => {
        if(user){
            const {uid, email, displayName, photoURL}= user;
            dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}));
            navigate('/browse');
        }
        else{
            dispatch(removeUser());
            navigate('/');
        }
    })
      return unsubscribe; // it is a cleanup function
},[]);



  const toggleGptSearch = () => {
     dispatch(toggleGptSearchView());
  }

  const handleLanguageChange = (e) =>{
    dispatch(changeLanguage(e.target.value));
  }
  
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
        <img className='w-44 mx-auto md:mx-0'
        src={logo_netflix}
        alt="logo_netflix"/>

        

       {user &&  (
         <div className='flex p-2 justify-between'>
         
          <button 
            className='bg-purple-600 py-2 px-4 mx-4 my-2  text-white rounded-lg' 
            onClick={toggleGptSearch}
          >
           {showGptSearch ? "HomePage" : "GPT Search"}
          </button>


          { showGptSearch && <select 
            className='p-2 m-2 bg-gray-900 text-white'
            onChange={handleLanguageChange}
            >
              {lang_supported.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
                )
               )
              };
          </select>
          }


          <img className="hidden md:block h-12 w-12 "src={user?.photoURL}></img>


          <button onClick ={handleSignOut}className='font-bold text-white p-2 '>Sign Out</button>
        </div>)
       }
    </div>
  )
}

export default Header;