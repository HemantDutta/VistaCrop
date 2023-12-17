import {Link} from "react-router-dom";

export const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer-container">
                    <div className="left">
                        <span className="logo cursive">VistaCrop</span>
                        <span className="tag">Where we turn data into harvests!</span>
                    </div>
                    <div className="right">
                        <span className="head">Sitemap</span>
                        <div className="list">
                            <Link to={"/"}>Home</Link>
                            <Link to={"/predict"}>Predict</Link>
                            <Link to={"/about"}>About us</Link>
                            <Link to={"/contact"}>Contact Us</Link>
                        </div>
                    </div>
                    <div className="bottom">
                        <span className="copy">&copy;&nbsp;VistaCrop&nbsp;2023</span>
                        <a href="https://www.linkedin.com/in/siddharth-raj-b605661b1/" target="_blank" rel={"noreferrer"}>Developed by: Siddharth Raj</a>
                    </div>
                </div>
            </footer>
        </>
    )
}