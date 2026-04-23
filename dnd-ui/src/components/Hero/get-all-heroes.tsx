import config from "../../config";
import localHeroes from "../../data/heroes.json";

export interface AllHeroDetails {
    name: string;
    description: string;
    image: string;
}

export async function GetAllHeroDetails(): Promise<AllHeroDetails[]> {
    if (!config.connectToBackEnd)
        return localHeroes;

    const nameOffline = "Unknown Hero";
    const apiOffline = "The scrolls remain silent... no tales of heros have been found. Scholars have searched every dusty archive and forgotten library, yet not a single parchment bears their name. If any heroes ever walked these lands, their story has been lost to the ages.";
    const imageOffline = "";

    try {
        const token = localStorage.getItem("token");
        const response = await fetch('http://localhost:5071/api/hero/all', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });

        if (!response.ok) throw new Error();

        return await response.json();
    } catch {
        return [{ name: nameOffline, description: apiOffline, image: imageOffline }];
    }
}