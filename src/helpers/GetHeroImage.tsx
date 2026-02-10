import Fighter from "../assets/img-hero-fighter.png"
import Cleric from "../assets/img-hero-cleric.png"
import Sorcerer from "../assets/img-sorcerer.png"
import Rogue from "../assets/img-rogue.png"
import NotFound from "../assets/img-hero-not-found.jpg"

function GetHeroImage(hero: string) {
    if (hero.toLowerCase() === "fighter") {
        return Fighter;
    }
    else if (hero.toLowerCase() === "cleric") {
        return Cleric;
    }
    else if (hero.toLowerCase() === "sorcerer") {
        return Sorcerer;
    }
    else if (hero.toLowerCase() === "rogue") {
        return Rogue;
    }
    else {
        return NotFound;
    }
}

export default GetHeroImage;