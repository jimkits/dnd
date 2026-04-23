import config from "../../config";
import localMonsters from "../../data/monsters.json";

export interface MonstersDetails {
    name: string;
    description: string;
    stats: {
        armorClass: string;
        hitPoints: string;
        speed: string;
    };
    attributes: {
        strenth: string;
        dexterity: string;
        constitution: string;
        intelligence: string;
        wisdom: string;
        charisma: string;
    };
}


export async function GetAllMonsterDetails(): Promise<MonstersDetails[]> {
    if (!config.connectToBackEnd)
        return localMonsters;

    const apiOffline = "The scrying orb grows dark. Whether by powerful magic or a rift in the planes, no monsters can be conjured from this realm at this time.";

    try {
        const token = localStorage.getItem("token");
        const response = await fetch(`http://localhost:5071/api/monsters/all`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });

        if (!response.ok) throw new Error();

        return await response.json();
    } catch {
        return [{
            name: "",
            description: apiOffline,
            stats: { armorClass: "", hitPoints: "", speed: "" },
            attributes: { strenth: "", dexterity: "", constitution: "", intelligence: "", wisdom: "", charisma: "" }
        }];
    }
}