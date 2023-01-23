import {Link} from "react-router-dom"
import "./header.css";
function Header() {
    
    return (
        <nav class="navbar">
            <div class="container-fluid">

                <div class="heading"><a class="this"><p>Chess Masters</p></a></div>

                <ul class="nav nav-tabs">

                    <li class="nav-item">
                        <Link to="/" class="nav-link"><p>Home</p></Link>
                    </li>

                    <li class="nav-item">
                        <Link to="/about" class="nav-link"><p>About</p></Link>
                    </li>

                </ul>
            </div>
        </nav>
    );
}

export default Header;
