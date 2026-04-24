import { useEffect, useState } from "react";
import "./style.css";
import { GetAllHeroDetails, AllHeroDetails } from './get-all-heroes';
import HeroDetails from './hero-details';

function Hero() {
    const [heroes, setHeroes] = useState<AllHeroDetails[]>([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        GetAllHeroDetails().then((details) => {
            setHeroes(details);
        });
    }, []);

    const filtered = heroes
        .sort((a, b) => a.name > b.name ? 1 : -1)
        .filter(h => h.name.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <div className="heroes">
            <div className="hero-search-row">
                <div className="hero-search-wrapper">
                    <span className="hero-search-icon">⌕</span>
                    <input
                        className="hero-search"
                        type="text"
                        placeholder="Search heroes..."
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>
            {filtered.map((hero, index) => (
                <HeroDetails key={hero.name} hero={hero} index={index} />
            ))}
        </div>
    );
}

export default Hero;