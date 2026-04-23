import config from "../../config";
import generateOfflineToken from "./generate-offline-token";

export async function validateLogin(username: string, password: string): Promise<{ success: boolean; message: string; token?: string }> {
    if (!config.connectToBackEnd) {
        if (username === config.offlineCredentials.username && password === config.offlineCredentials.password)
            return { success: true, message: "Logged in", token: generateOfflineToken() };
        return { success: false, message: "Invalid username or password" };
    }

    try {
        const response = await fetch("http://localhost:5071/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        const data = await response.json();

        if (response.ok) {
            return { success: true, message: data.message, token: data.token };
        } else {
            return { success: false, message: data.message || "Invalid username or password" };
        }
    } catch {
        return { success: false, message: "Unable to connect to the server" };
    }
}
