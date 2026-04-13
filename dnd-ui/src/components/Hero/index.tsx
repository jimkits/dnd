import { useEffect, useState } from "react";
import "./style.css";
import { GetAllHeroDetails, AllHeroDetails } from './get-all-heroes';
import HeroDetails from './hero-details';

function Hero() {
    const [heroes, setHeroes] = useState<AllHeroDetails[]>([]);

    useEffect(() => {
        GetAllHeroDetails().then((details) => {
            console.log("Hero details response:", details);
            setHeroes(details);
        });
    }, []);

    return (
        <div className="heroes">
            {heroes
                .sort((a, b) => a.name > b.name ? 1 : -1)
                .map((hero, index) => (
                    <HeroDetails key={hero.name} hero={hero} index={index} />
                ))}
        </div>
    );
}

export default Hero;