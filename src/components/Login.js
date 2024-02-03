import React, { useRef, useState } from 'react'
import Header from './Header';
import { validate } from '../utils/FormValidate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from 'firebase/auth';
import { auth } from '../utils/Firebase';

import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { user_icon } from '../utils/Constants';

const Login = () => {
 
  const dispatch = useDispatch();
  
  const[isSignInForm,setSignInForm]= useState(true);
  const[errorMessage,setErrorMessage]= useState(null);

  const name = useRef(null);
  const email = useRef(null);// setting the initial content of email field
  const password = useRef(null);

  const handleButtonClick = () =>{
    // validate the form data(FormValidation.js)
       //console.log(email);
       //console.log(password);
    const errorMsg = validate(email.current.value,password.current.value);
       //console.log(errorMsg);
    setErrorMessage(errorMsg);
    if(errorMsg) return;

    if(!isSignInForm){
        //sign up logic
        createUserWithEmailAndPassword(
          auth,
          email.current.value, // email pura ek object hai....agar exact email address caahiye to destructure krna prega therefore email.current.value
          password.current.value // same logic as above for email
        )
          .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
               // now updating the user profile with his display name and photo, previously while sign up we only got email and userId for saving 
               updateProfile(user,{
                 displayName:name.current.value,
                 photoURL : user_icon
               })
                  .then(() => {
                    // Profile updated!
                    const {uid, email, displayName, photoURL}= auth.currentUser;
                    // adding the userinfo to our store
                    dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}));
                     // after sign up navigate to browse page
                    
                    // ...
                  })
                  .catch((error) => {
                    // An error occurred
                    setErrorMessage(error.message);
                     // ...
                  });
          
              // console.log(user);
          })
          .catch((error) => {
           const errorCode = error.code;
           const errorMessage = error.message;
           setErrorMessage(errorCode + "-" + errorMessage);
          });
    }
    else{
      //sign in logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
          
             //console.log(user);
             // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
              //console.log(errorCode +"-" + errorMessage)
            setErrorMessage(errorCode +"-" + errorMessage)
        });

    }
  }

  const toggleSignInForm = () =>{
    //for toggling bw sign in and sign up button on login page
     setSignInForm(!isSignInForm);
  }
  return (
    <div className=''>
        <Header/>

        <div className='absolute'>
            <img className=""src="https://assets.nflxext.com/ffe/siteui/vlv3/16006346-87f9-4226-bc25-a1fb346a2b0c/9662d0fd-0547-4665-b887-771617268815/IN-en-20240115-popsignuptwoweeks-perspective_alpha_website_large.jpg"
             alt="bg_img"/>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className='absolute  p-8 w-3/12 bg-black my-24 mx-auto right-0 left-0  text-white rounded-lg bg-opacity-80'> 
            
            <h1 className='text-3xl py-1' > {isSignInForm ? "Sign In" : "Sign Up"}</h1>
            
            {!isSignInForm &&<input 
             ref={name}
             className='p-4 my-4 w-full bg-gray-700' 
             type="text"
             placeholder='Full Name'
            />}

            <input 
             ref={email} // referencing the content of email input field
             className='p-4 my-4 w-full bg-gray-700' 
             type="text"
             placeholder='Email Address'
            />

            <input 
            ref={password}
            className='p-4 my-4 w-full bg-gray-700'
            type="password" 
            placeholder='Password'
            />

            <p className='font-bold text-red-700 text-2xl '>{errorMessage}</p>

            <button className='bg-red-700 p-4 my-6 w-full rounded-lg' onClick={handleButtonClick}> 
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
            
            <p className='py-4 cursor-pointer' onClick={toggleSignInForm}> {isSignInForm ? "New to Netflix? Sign Up Now" : "Already Registered? Sign In"}</p>

            
        </form>
    </div>
    
  )
}

export default Login;