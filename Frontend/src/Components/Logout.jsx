import { useNavigate } from "react-router-dom";
import  axios  from "axios";

 
 
 export const LogoutUser = ({loggedInUser,setLoggedInUser})=> {
    const navigate = useNavigate()
     const handleLogout = async () => {
        try {
            await axios.post('http://localhost:3000/api/auth/logout', {}, { withCredentials: true });
            localStorage.removeItem('token');
            localStorage.removeItem('userId');
            setLoggedInUser(null);
            navigate('/');
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

 
 return (
            <button className="text-black" onClick={handleLogout}>Logout</button>
 )
};
