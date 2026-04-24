import config from "../../config";
import localHeroes from "../../data/heroes.json";

export interface AllHeroDetails {
    name: string;
    description: string;
    image: string;
    book: string;
    core_traits: CoreTraits;
}

export interface CoreTraits {
    primary_ability: string;
    hit_point_die: string;
    saving_throw_proficiencies: string;
    skill_proficiencies: string;
    weapon_proficiencies: string;
    tool_proficiencies: string;
    armor_training: string;
    starting_equipment: StartingEquipment;
}

export interface StartingEquipment {
    option_a: string;
    option_b: string;
    option_c: string;
}

export async function GetAllHeroDetails(): Promise<AllHeroDetails[]> {
    if (!config.connectToBackEnd)
        return localHeroes;

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
        return [{
            name: 'Unknown Hero',
            description: 'The scrolls remain silent... no tales of heros have been found. Scholars have searched every dusty archive and forgotten library, yet not a single parchment bears their name. If any heroes ever walked these lands, their story has been lost to the ages.',
            image: '/images/img-hero-not-found.jpg',
            book: '',
            core_traits: {
                primary_ability: '',
                hit_point_die: '',
                saving_throw_proficiencies: '',
                skill_proficiencies: '',
                weapon_proficiencies: '',
                tool_proficiencies: '',
                armor_training: '',
                starting_equipment: {
                    option_a: '',
                    option_b: '',
                    option_c: ''
                }
            }
        }];
    }
}