import {Navbar} from "../components/Navbar";
import {Footer} from "../components/Footer";
import {Link} from "react-router-dom";
import {Service} from "../components/Service";

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
                        <span className="head">Welcome to VistaCrop, <span className="bolder cursive">where we turn data into harvests!</span></span>
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
                {/*  Services  */}
                <section className="services" id="services">
                    <div className="header">
                        <span className="head">Our Solutions for <span className="bolder cursive">Precision Crop Planning</span></span>
                        <span className="desc">Experience precision in agriculture with <span className="text-gradient cursive">VistaCrop's</span> Crop Planning Services. We analyze your land and environmental factors to deliver personalized crop plans, ensuring you make informed decisions for a prosperous and sustainable harvest.</span>
                    </div>
                    <div className="service-grid">
                        <Service src={"assets/sv_1.png"} alt={"Crop Recommendation"} title={"Custom Crop Recommendations"} tag={"Discover the perfect crops for your land! Our platform analyzes a variety of factors, including soil type, climate, and other environmental variables, to provide tailored recommendations for crop selection. Make informed decisions to ensure a bountiful harvest."}/>
                        <Service src={"assets/sv_2.png"} alt={"Advanced Analysis"} title={"Advanced Analysis"} tag={"Our advanced algorithms analyze the input data to understand the unique characteristics of your land."}/>
                        <Service src={"assets/sv_3.png"} alt={"Tailored Recommendations"} title={"Tailored Recommendations"} tag={"Receive customized recommendations for crops that thrive in your specific conditions, along with insights on optimal planting times and cultivation practices."}/>
                        <Service src={"assets/sv_4.png"} alt={"Interactive Interface"} title={"Interactive Interface"} tag={"Utilize our user-friendly interface to input information about your land. Our intuitive system processes the data and generates personalized crop suggestions, allowing you to plan your agricultural venture with confidence"}/>
                    </div>
                </section>
                {/*  Services End  */}
            </div>
            {/*Component Body End*/}
            {/*  Footer  */}
            <Footer/>
            {/*  Footer End  */}
        </>
    )
}