import HeroFighter from "../data/HeroFighter";
import HeroCleric from "../data/HeroCleric";
import HeroSorcerer from "../data/HeroSorcerer";
import HeroRogue from "../data/HeroRogue";
import HeroNotFound from "../data/HeroNotFound";

function GetHeroDetails(hero: string) {
    if (hero.toLowerCase() === "fighter") {
        return HeroFighter;
    }
    else if (hero.toLowerCase() === "cleric") {
        return HeroCleric;
    }
    else if (hero.toLowerCase() === "sorcerer") {
        return HeroSorcerer;
    }
    else if (hero.toLowerCase() === "rogue") {
        return HeroRogue;
    }
    else {
        return HeroNotFound;
    }
}

export default GetHeroDetails;