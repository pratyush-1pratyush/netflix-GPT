import React from 'react';
import { signOut } from 'firebase/auth';
import {auth} from "../utils/Firebase"
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Header = () => {
  const user = useSelector((store) => store.user)
   
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
    }).catch((error) => {
      // An error happened.
      navigate("/errorPage")
    });
  }
  
  return (
    <div className="flex justify-between w-full absolute px-8 py-2 bg-gradient-to-b from-black z-10 ">
        <img className='w-48'
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo_netflix"/>

       {user && <div className='flex p-2'>
          <img className="h-12 w-12"src={user?.photoURL}></img>
          <button onClick ={handleSignOut}className='font-bold text-white p-2'>Sign Out</button>
        </div>
       }
    </div>
  )
}

export default Header;