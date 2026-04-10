export async function GetHeroImage(hero: string): Promise<string> {
    try {
        const token = localStorage.getItem("token");
        const response = await fetch(`http://localhost:5071/api/hero/image?hero=${hero}`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
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
