import {Link} from "react-router-dom";
import {useEffect} from "react";

export const Navbar = () => {

    //Scroll Y
    let scrollY = window.scrollY;

    //Hide navbar on scroll
    useEffect(() => {
        const hideNav = () => {
            let nav = document.getElementById("nav");
            if (window.scrollY > scrollY) {
                nav.classList.add("hide");
            } else {
                nav.classList.remove("hide");
            }
            scrollY = window.scrollY;
        }

        window.addEventListener("scroll", hideNav);

        return () => {
            window.removeEventListener("scroll", hideNav);
        }
    }, [])

    return (
        <>
            <nav id="nav">
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