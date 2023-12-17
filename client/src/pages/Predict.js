import {Navbar} from "../components/Navbar";
import {Footer} from "../components/Footer";

export const Predict = () => {
    return (
        <>
            {/*  Header  */}
            <Navbar/>
            {/*  Header End */}
            {/*Component Body*/}
            <div className="predict main-container" id="predict">
                <div className="form-section">
                    <div className="header">
                        <span className="head">Time to level up for <span className="bolder cursive">Harvest</span></span>
                        <span className="tag">Please fill the following fields properly, so that we can provide you with the most accurate recommendations for your crops.</span>
                    </div>
                </div>
            </div>
            {/*Component Body End*/}
            {/*  Footer  */}
            <Footer/>
            {/*  Footer End  */}
        </>
    )
}