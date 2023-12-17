import {Link} from "react-router-dom";

export const Navbar = () => {
    return (
        <>
            <nav>
                <div className="navbar-container">
                    <div className="left">
                        <Link to={"/"} className="logo cursive text-gradient">VistaCrop</Link>
                    </div>
                    <div className="right">
                        <ul>
                            <li><Link to={"/predict"}>predict</Link></li>
                            <li><Link to={"/contact"}>contact us</Link></li>
                            <li><Link to={"/about"}>about us</Link></li>
                        </ul>
                        <button type="button" className="ham button"><i className="fa-solid fa-bars"/></button>
                    </div>
                </div>
            </nav>
        </>
    )
}