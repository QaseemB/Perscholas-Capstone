import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        password: '',
        email: ''
    });
    const navigate = useNavigate();

    const { username, password ,email, name} = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:3000/api/auth/register', {
                username,
                password,
                email,
                name
            });
            console.log(formData)
            navigate('/home')// Set success message
        } catch (err) {
            console.error(err.response.data);
            alert('Failed to register, Username or email already exists'); // Set error message
        }
    };

    return (
        <div className="auth-form">
            <h2>Register</h2>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="First and last name" name="name" value={name} onChange={onChange} required />
                <input type="text" placeholder="Username" name="username" value={username} onChange={onChange} required />
                <input type="text" placeholder="Password" name="password" value={password} onChange={onChange} required />
                <input type="text" placeholder="email@aol.com" name="email" value={email} onChange={onChange} required />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export {Register};
