export async function GetHeroImage(hero: string): Promise<string> {
    try {
        const response = await fetch(`http://localhost:5071/api/hero/image?hero=${hero}`, {
            method: "GET"
        });

        if (response.ok) {
            const blob = await response.blob();
            return URL.createObjectURL(blob);
        }

        return "";
    } catch {
        return "";
    }
}
