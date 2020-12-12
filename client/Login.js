import React, {useState, useContext} from 'react'
import {Link} from 'react-router-dom'
import { FirebaseContext } from './firebase/firebase';



const Login = () => {
    const { app, auth } = useContext(FirebaseContext);
    

    let handleGoogleAuth = () => {
        let provider = new app.auth.GoogleAuthProvider();
        console.log(provider)

        auth.signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            console.log("success", user)
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            console.log("error", errorCode, errorMessage, email, credential)
            // ...
          });
          
          
          

    }

    return(
        <div>This is default Login page, choose your style, bitch!!
            <Link to="/loginwithemailpassword"><h2>Use Email password method</h2></Link>
            <Link to="/loginwithphonenumber"><h2>Use Phone number method</h2></Link>
            <button onClick={() => {handleGoogleAuth()}}>Log in with google</button>
        </div>
    )
}
export default Login