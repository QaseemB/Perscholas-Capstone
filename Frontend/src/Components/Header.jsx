import { Link } from "react-router-dom";
import { LogoutUser } from "./Logout";

export const Header = ({ loggedInUser, setLoggedInUser })=>{
    return (
        <>
        <seciton id="page header " className="p-8 text-2xl flex items-center justify-between">
         <h1 className="text-black ">AUDIOPHILES </h1>
         <LogoutUser loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}/>
        </seciton>
        </>
    )
  
}