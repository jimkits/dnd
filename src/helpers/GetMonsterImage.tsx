import NotFound from "../assets/img-monster-not-found.png"

function GetMonsterImage(hero: string) {
    if (hero.toLowerCase() === "fighter") {
        return NotFound;
    }
    else {
        return NotFound;
    }
}

export default GetMonsterImage;