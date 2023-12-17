import {Navbar} from "../components/Navbar";
import {Footer} from "../components/Footer";
import {Link} from "react-router-dom";

export const Home = () => {
    return (
        <>
            {/*  Header  */}
            <Navbar/>
            {/*  Header End */}
            {/*Component Body*/}
            <div className="home main-container" id="home">
                {/*  Hero  */}
                <section className="hero" id="hero">
                    <div className="left">
                        <span className="head">Welcome to VistaCrop, <span className="bold">where we turn data into harvests!</span></span>
                        <span className="tag">Enter the details about your land and surrounding environment, and let us guide you to the best crop choices for optimal yield and sustainability.</span>
                        <div className="cta">
                            <Link to={"/"} className="button">Explore More&nbsp;<i className="fa-solid fa-chevron-right"/></Link>
                            <Link to={"/"} className="button">Start Now&nbsp;<i className="fa-solid fa-chevron-right"/></Link>
                        </div>
                    </div>
                    <div className="right">
                        <img src="assets/vc_hero.png" alt="A nice farmer"/>
                    </div>
                </section>
                {/*  Hero End  */}
            </div>
            {/*Component Body End*/}
            {/*  Footer  */}
            <Footer/>
            {/*  Footer End  */}
        </>
    )
}