import React from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import {auth} from "../utils/Firebase"
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { useEffect } from 'react';
import { logo_netflix } from '../utils/Constants';


const Header = () => {
  const user = useSelector((store) => store.user)
   
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
      return unsubscribe;
},[]);
  
  return (
    <div className="flex justify-between w-full absolute px-8 py-2 bg-gradient-to-b from-black z-10 ">
        <img className='w-48'
        src={logo_netflix}
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