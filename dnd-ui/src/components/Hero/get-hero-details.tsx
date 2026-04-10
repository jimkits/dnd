export interface HeroDetails {
    name: string;
    description: string;
}

export async function GetHeroDetails(hero: string): Promise<HeroDetails> {
    const apiOffline = "The scrolls remain silent... no tale of this hero has been found. Scholars have searched every dusty archive and forgotten library, yet not a single parchment bears their name. If this hero ever walked these lands, their story has been lost to the ages.";
    try {
        const token = localStorage.getItem("token");
        const response = await fetch(`http://localhost:5071/api/hero?hero=${hero}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });

        if (!response.ok) throw new Error();

        return await response.json();
    } catch {
        return { name: hero, description: apiOffline };
    }
}