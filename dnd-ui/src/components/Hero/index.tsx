import { useLocation } from "react-router";
import "./style.css";
import GetHeroDetails from "../../helpers/GetHeroDetails";
import GetHeroImage from "../../helpers/GetHeroImage";

function Hero() {
    const location = useLocation();
    const hero = location.state.name;
    const heroDetails = GetHeroDetails(hero);
    const heroImage = GetHeroImage(hero);

    return (
        <div className="hero">
            <h1 className="txt-hero"> {hero}</h1>
            <div className="hero-details">
                <div className="txt-hero-description">
                    {heroDetails.description.map((item) => {
                        return <h2>{item.text}</h2>
                    })}
                </div>
                <img className="img-hero" src={heroImage} alt="img-hero" />
            </div>
        </div>
    );
}

export default Hero;