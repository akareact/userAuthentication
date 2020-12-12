import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Switch, Route, } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import LoginWithEmailPassword from './LoginWithEmailPassword'
import LoginWithPhoneNumber from './LoginWithPhoneNumber'
import FirebaseProvider from './firebase/firebase'


const App = () => {
    return (
        
        
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/loginwithemailpassword">
                    <LoginWithEmailPassword />
                </Route>
                <Route path="/loginwithphonenumber">
                    <LoginWithPhoneNumber />
                </Route>
        
            </Switch>
        
    )
}



ReactDOM.render(<FirebaseProvider>
    <BrowserRouter><App /></BrowserRouter>
            </FirebaseProvider>, document.querySelector("#root"))