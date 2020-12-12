import React, {useState, useEffect, useContext} from 'react'
import { FirebaseContext } from './firebase/firebase';
import {Link} from 'react-router-dom'

const LoginWithPhoneNumber = () => {
    const { app, auth } = useContext(FirebaseContext);
    const [number, changeNumber] = useState("")
    const [recaptcha, changerecaptchaStatus] = useState(false)
    const [codeSentStatus, changeCodeSentStatus] = useState(false)
    const [code, changeCode] = useState("")
    
    useEffect(() => {
        window.recaptchaVerifier = new app.auth.RecaptchaVerifier('recaptcha-container');
        recaptchaVerifier.render().then(function(widgetId) {
            window.recaptchaWidgetId = widgetId;
          });
     
          

    }, [recaptcha])
    let handleUser = () => {
        console.log("number" , number)
        
        let appVerifier = window.recaptchaVerifier;
        auth.signInWithPhoneNumber(number, appVerifier)
            .then(function (confirmationResult) {
            // SMS sent. Prompt user to type the code from the message, then sign the
            // user in with confirmationResult.confirm(code).
            window.confirmationResult = confirmationResult;
            changeCodeSentStatus(true)
            console.log("sms sent", confirmationResult)
            }).catch((error) => {
               changerecaptchaStatus(!recaptcha)
               console.log("error sms not sent", error)
            });

        
    }

    let handleCode = () => {
        console.log("code is ", code)
        
        confirmationResult.confirm(code).then(function (result) {
        // User signed in successfully.
         var user = result.user;
         console.log("succes ", user)
        // ...
        }).catch(function (error) {
        // User couldn't sign in (bad verification code?)
         // ...
         console.log("error " ,error )
         changeCodeSentStatus(false)
         alert("wrong code entered try again bitch")
        });

    }

    return(
        <div>
            <Link to="/"><h3>Back to homepage</h3></Link>
            <Link to="/login"><h3>Back to default login page</h3></Link>
            This is login page for Phone number method, bitch!!
            {codeSentStatus ?<div>
                <h3>CODE IS SENT</h3>
                <input placeholder ="PLease type in the code here" type="text" onChange={(e) => {changeCode(e.target.value)}}/>
                <button onClick={() => {handleCode()}}>Submit code</button>
            </div> 
            : 
            <div><input placeholder="Type in your phone number" type="text" onChange={e => {changeNumber(e.target.value)}}/>
            <div id="recaptcha-container"></div>
            <button onClick={() => handleUser()}>Submit</button></div> }
            
        </div>
    )
}
export default LoginWithPhoneNumber