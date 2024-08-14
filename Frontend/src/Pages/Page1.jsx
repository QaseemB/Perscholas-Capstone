import { useState } from 'react'
import {Register} from '../Components/Register'
import {Login} from '../Components/Login'


export const PageOneRendering = () => {
    const [loggedInUser, setLoggedInUser] = useState(null);

    // Determine what to render based on loggedInUser
    let content = (
      
            <div className="flex items-center justify-center h-screen bg-gray-400">
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <Register />
                <Login setLoggedInUser={setLoggedInUser} />
                </div>
                
            </div>
        
        );


    return (
        <div className="App">
            {content}
        </div>
    );
}