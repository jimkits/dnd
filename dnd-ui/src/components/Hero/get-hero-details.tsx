export interface HeroDetails {
    name: string;
    description: { [key: string]: string }[];
}

export async function GetHeroDetails(hero: string): Promise<HeroDetails> {
    const apiOffline = [{ "par1": "The scrolls remain silent... no tale of this hero has been found. Scholars have searched every dusty archive and forgotten library, yet not a single parchment bears their name. If this hero ever walked these lands, their story has been lost to the ages." }];

    try {
        const response = await fetch(`http://localhost:5071/api/hero?hero=${hero}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        });

        if (response.ok) {
            const data: HeroDetails = await response.json();
            return data;
        }

        return { name: hero, description: apiOffline };
    } catch {
        return { name: hero, description: apiOffline };
    }
}