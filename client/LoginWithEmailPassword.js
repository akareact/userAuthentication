import React, {useState, useContext} from 'react'
import { FirebaseContext } from './firebase/firebase';
import {Link} from 'react-router-dom'

const LoginWithEmailPassword = () => {
    const { app, auth } = useContext(FirebaseContext);
    const [email, changeEmail] = useState("")
    const [password, changePassword] = useState("")

    let handleUser = () => {
        console.log("email" , email)
        auth.createUserWithEmailAndPassword(email, password)
            .then((user) => {
            // Signed in 
            // ...
            console.log(user)
            })
            .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log("error", errorCode, errorMessage)
    // ..
        });
    }

    return(
        <div>
            <Link to="/"><h3>Back to homepage</h3></Link>
            <Link to="/login"><h3>Back to default login page</h3></Link>
            This is login page for simple EMAIL PASSWORD method, bitch!!
            <input placeholder="Type in your email id" type="text" onChange={e => {changeEmail(e.target.value)}}/>
            <input placeholder="Type in your password id" type="password" onChange={e => {changePassword(e.target.value)}}/>
            <button onClick={() => handleUser()}>Submit</button>
        </div>
    )
}
export default LoginWithEmailPassword