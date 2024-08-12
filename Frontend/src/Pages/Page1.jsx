import { useState } from 'react'
import {Register} from '../Components/Register'
import {Login} from '../Components/Login'


export const PageOneRendering = () => {
    const [loggedInUser, setLoggedInUser] = useState(null);

    const handleLogout = () => {
        localStorage.removeItem('token'); // Remove token from localStorage
        setLoggedInUser(null); // Set logged-in user to null
    };

    // Determine what to render based on loggedInUser
    let content;

    if (loggedInUser) {
        content = (
            <div>
                <p>Welcome {loggedInUser}</p>
                <button onClick={handleLogout}>Logout</button>
            </div>
        );
    } else {
        content = (
            <div>
                <Register />
                <Login setLoggedInUser={setLoggedInUser} />
            </div>
        );
    }

    return (
        <div className="App">
            {content}
        </div>
    );
}