import React, { useState } from 'react'
import Header from './Header';
import { Form } from 'react-router-dom';

const Login = () => {
 
  const[isSignInForm,setSignInForm]= useState(true);

  const toggleSignInForm = () =>{
     setSignInForm(!isSignInForm);
  }
  return (
    <div className=''>
        <Header/>

        <div className='absolute'>
            <img className=""src="https://assets.nflxext.com/ffe/siteui/vlv3/16006346-87f9-4226-bc25-a1fb346a2b0c/9662d0fd-0547-4665-b887-771617268815/IN-en-20240115-popsignuptwoweeks-perspective_alpha_website_large.jpg"
             alt="bg_img"/>
        </div>
        <form className='absolute  p-8 w-3/12 bg-black my-24 mx-auto right-0 left-0  text-white rounded-lg bg-opacity-80'> 
            
            <h1 className='text-3xl py-1'> {isSignInForm ? "Sign In" : "Sign Up"}</h1>
            
            {!isSignInForm &&<input 
             className='p-4 my-4 w-full bg-gray-700' 
             type="text"
             placeholder='Full Name'
            />}

            <input 
             className='p-4 my-4 w-full bg-gray-700' 
             type="text"
             placeholder='Email Address'
            />

            <input 
            className='p-4 my-4 w-full bg-gray-700'
            type="password" 
            placeholder='Password'
            />

            <button className='bg-red-700 p-4 my-6 w-full rounded-lg'> 
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
            
            <p className='py-4 cursor-pointer' onClick={toggleSignInForm}> {isSignInForm ? "New to Netflix? Sign Up Now" : "Already Registered? Sign In"}</p>

            
        </form>
    </div>
    
  )
}

export default Login;