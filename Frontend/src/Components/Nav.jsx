import { Link } from "react-router-dom";
import '../nav.css'

export function Nav (props) {
    return(
        <div className="nav">
            <Link to="/home">
                <div>Home</div>
            </Link>
            <Link to="/studio">
                <div>studio</div>
            </Link>
            <Link to="/instruments">
                <div>instruments</div>
            </Link>
            <Link to="/cart">
                <div className="shopCart">
                    <img src="shopping-cart.png" alt="shopping cart"/>
                </div>
            </Link>

        </div>
    )
}