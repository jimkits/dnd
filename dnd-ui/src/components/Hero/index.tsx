import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import "./style.css";
import { GetHeroDetails } from './get-hero-details';
import { GetHeroImage } from './get-hero-image';

function Hero() {
    const location = useLocation();
    const hero = location.state.name;
    const [description, setDescription] = useState<{ [key: string]: string }[]>([]);
    const [image, setImage] = useState("");

    useEffect(() => {
        GetHeroDetails(hero).then((details) => {
            console.log("Hero details response:", details);
            setDescription(details.description);
        });
    }, [hero]);

    useEffect(() => {
        GetHeroImage(hero).then((details) => {
            setImage(details);
        });
    }, [hero]);

    return (
        <div className="hero">
            <h1 className="txt-hero"> {hero}</h1>
            <div className="hero-details">
                <div className="txt-hero-description">
                    {description.map((paragraphs, i) =>
                        Object.values(paragraphs).map((text, j) =>
                            <h2 key={`${i}-${j}`}>{text}</h2>
                        )
                    )}
                </div>
                <img className="img-hero" src={image} alt="img-hero" />
            </div>
        </div>
    );
}

export default Hero;