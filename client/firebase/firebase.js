import React, { createContext, useEffect } from 'react'
import firebaseConfig from './firebaseConfig';
import app from 'firebase/app'
import 'firebase/database';
import 'firebase/auth';

const FirebaseContext = createContext(null)
export { FirebaseContext }

export default ({ children }) => {
    let firebase = {
        app: null,
        database: null,
        auth : null,
        googleAuth : null
    }


    // check if firebase app has been initialized previously
    // if not, initialize with the config we saved earlier
    if (!app.apps.length) {
        app.initializeApp(firebaseConfig);
        firebase = {
            app: app,
            database: app.database(),
            auth : app.auth(),
            
        }
    }
    

    return (
        <FirebaseContext.Provider value={firebase}>
            {children}
        </FirebaseContext.Provider>
    )
}