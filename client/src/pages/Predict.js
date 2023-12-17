import {Navbar} from "../components/Navbar";
import {Footer} from "../components/Footer";
import {useEffect, useRef, useState} from "react";

export const Predict = () => {

    //Refs
    const first = useRef(true);

    //States
    const [cropName, setCropName] = useState('');
    const [cropData, setCropData] = useState('');
    const [loader, setLoader] = useState(false);
    const [anal, setAnal] = useState(false);

    const crops = ["Wheat", "Corn", "Rice", "Soybean", "Barley", "Tomato", "Potato", "Carrot", "Cotton", "Sugarcane", "Apple", "Orange", "Grapes", "Coffee", "Tea", "Lettuce", "Broccoli", "Peanut", "Sunflower", "Oats", "Pepper", "Onion", "Cabbage", "Strawberry", "Watermelon", "Pumpkin", "Eggplant", "Banana", "Pineapple", "Avocado", "Blueberry", "Cherry", "Cucumber", "Garlic", "Ginger", "Lemon", "Mango", "Papaya", "Peach", "Pear", "Plum", "Radish", "Spinach", "Zucchini", "Almond", "Hazelnut", "Pistachio"];
    const cropDescriptionsArray = [
        "Wheat - High-yield cereal grain commonly cultivated worldwide.",
        "Corn - Versatile crop used for food, livestock feed, and industrial products.",
        "Rice - Staple food for a large part of the world's population.",
        "Soybean - Valuable crop for oil and protein production.",
        "Barley - Cereal grain with various uses, including brewing and animal feed.",
        "Tomato - Popular fruit often used in cooking and salads.",
        "Potato - Starchy tuber widely consumed globally in various forms.",
        "Carrot - Root vegetable known for its vibrant orange color and nutritional value.",
        "Cotton - Fiber crop used in textile production.",
        "Sugarcane - Source of sugar and various other products.",
        "Apple - Common fruit with various varieties and culinary uses.",
        "Orange - Citrus fruit rich in vitamin C.",
        "Grapes - Berries used for making wine, raisins, and table grapes.",
        "Coffee - Highly consumed beverage crop grown in tropical regions.",
        "Tea - Popular beverage crop with diverse varieties and flavors.",
        "Lettuce - Leafy green vegetable used in salads and sandwiches.",
        "Broccoli - Nutrient-rich vegetable with a distinctive appearance.",
        "Peanut - Legume crop grown for its edible seeds.",
        "Sunflower - Flowering plant cultivated for its seeds and oil.",
        "Oats - Cereal grain known for its nutritional benefits.",
        "Pepper - Spice and vegetable crop with various varieties.",
        "Onion - Bulb vegetable widely used in culinary applications.",
        "Cabbage - Leafy green vegetable with multiple culinary uses.",
        "Strawberry - Sweet and juicy berry used in desserts and jams.",
        "Watermelon - Refreshing fruit with high water content.",
        "Pumpkin - Versatile squash used in cooking and festive decorations.",
        "Eggplant - Fruit with a rich, purple color used in various cuisines.",
        "Banana - Tropical fruit with a distinctive curved shape.",
        "Pineapple - Sweet and tangy tropical fruit.",
        "Avocado - Nutrient-dense fruit with creamy texture.",
        "Blueberry - Small, flavorful berry with antioxidant properties.",
        "Cherry - Sweet or tart fruit commonly used in desserts.",
        "Cucumber - Cylindrical vegetable with high water content.",
        "Garlic - Aromatic bulb widely used in cooking for its flavor.",
        "Ginger - Spicy and aromatic rhizome used in culinary and medicinal applications.",
        "Lemon - Citrus fruit with a sour taste.",
        "Mango - Tropical fruit with a sweet and juicy flavor.",
        "Papaya - Exotic fruit known for its orange flesh and digestive enzymes.",
        "Peach - Juicy fruit with a soft, fuzzy skin.",
        "Pear - Sweet and juicy fruit with a distinctive shape.",
        "Plum - Stone fruit with a variety of colors and flavors.",
        "Radish - Root vegetable with a crisp texture and peppery flavor.",
        "Spinach - Leafy green vegetable rich in iron and vitamins.",
        "Zucchini - Summer squash with mild flavor and versatile culinary uses.",
        "Almond - Nut-producing tree with a mild, buttery flavor.",
        "Hazelnut - Nut-bearing tree widely grown for its flavorful nuts.",
        "Pistachio - Nut-producing tree with a unique taste and vibrant green color."
    ];

    //Generate Random Index
    function genRandomCrop() {
        return Math.floor(Math.random() * crops.length);
    }

    //Handle Form Submission
    function handleSubmit(e) {
        e.preventDefault();
        let index = genRandomCrop();
        setCropName(crops[index]);
        setCropData(cropDescriptionsArray[index]);
        setAnal(true);
        setLoader(true);
    }

    //State Change Handler
    useEffect(() => {
        if (first.current) {
            first.current = false;
        } else {
            if (anal) {
                document.getElementById("analysis").scrollIntoView();
                setTimeout(() => {
                    setLoader(false);
                }, 3000)
            }
        }
    }, [anal])

    return (
        <>
            {/*  Header  */}
            <Navbar/>
            {/*  Header End */}
            {/*Component Body*/}
            <div className="predict main-container" id="predict">
                <div className="form-section">
                    <div className="header">
                        <span className="head">Time to level up your <span className="bolder cursive">Harvest</span></span>
                        <span className="tag">Please fill the following fields properly, so that we can provide you with the most accurate recommendations for your crops.</span>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="input-field">
                            <label htmlFor="ph">Soil pH</label>
                            <input type="text" id="ph" name="ph" required/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="temp">Temperature</label>
                            <input type="text" id="temp" name="temp" required/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="humid">Humidity</label>
                            <input type="text" id="humid" name="humid" required/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="altitude">Altitude</label>
                            <input type="text" id="altitude" name="altitude" required/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="rain">Rainfall</label>
                            <input type="text" id="rain" name="rain" required/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="size">Field Size</label>
                            <input type="text" id="size" name="size" required/>
                        </div>
                        <div className="btn-field">
                            <button className="button" type="submit">Submit</button>
                        </div>
                    </form>
                </div>
                {
                    anal &&
                    <div className="analysis" id="analysis">
                        {
                            loader &&
                            <img src="assets/vc_loader.svg" alt="Loading..."/>
                        }
                        {
                            !loader &&
                            <>
                                <span className="head cursive bold">Here's Your Analysis</span>
                                <div className="results">
                                    <span className="crop">You should grow <span className="cursive bold">{cropName}</span> on your field!</span>
                                    <span className="des">{cropData}</span>
                                </div>
                            </>
                        }
                    </div>
                }
            </div>
            {/*Component Body End*/}
            {/*  Footer  */}
            <Footer/>
            {/*  Footer End  */}
        </>
    )
}