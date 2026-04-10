export async function validateLogin(username: string, password: string): Promise<{ success: boolean; message: string; token?: string }> {
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
