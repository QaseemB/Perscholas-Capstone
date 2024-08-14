import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = ({ setLoggedInUser }) => {
    const [formData, setFormData] = useState({  
        username: '',
        password: ''  
    });

    const navigate = useNavigate();

    const [message, setMessage] = useState('');

    const { username, password } = formData;

    const onChange = e => setFormData({ ...formData, 
                                      [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        setMessage('')
        try {
            const res = await axios.post('http://localhost:3000/api/auth/login', 
            {
                username,
                password
            }, {
                withCredentials: true // Correct placement of withCredentials
            });
            localStorage.setItem('userId', res.data.userId);
            setLoggedInUser(username);
            navigate('/home');
        } catch (err) {
            console.error(err.response.data || err);
            alert('Failed to login - wrong credentials');         
        }
    };
    

    return (
        <div className="auth-form">
            <h2 className="text-center text-black">Login</h2>
            <form onSubmit={onSubmit}>
                <input type="text" 
                       placeholder="Username" 
                       name="username" 
                       value={username} 
                       onChange={onChange} 
                       required />
                <input type="password" 
                       placeholder="Password" 
                       name="password" 
                       value={password} 
                       onChange={onChange} 
                       required />
                <button className='border-4 border-gray-600 bg-gray-300 w-64 text-black 'type="submit">Login</button>
            </form>
            <p className="message">{message}</p>
        </div>
    );
};


export  {Login};
