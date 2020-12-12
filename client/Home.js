import React from 'react'
import {Link} from 'react-router-dom'


const Home = () => {
    
    return(
        <div>This is home page bitch!!
            <Link to="/login"><button >Take me to login page</button></Link>
        </div>
    )
}
export default Home