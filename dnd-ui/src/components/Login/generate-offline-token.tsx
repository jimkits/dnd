function generateOfflineToken(): string {
    const header = btoa(JSON.stringify({ alg: "none", typ: "JWT" })).replace(/=/g, "");
    const payload = btoa(JSON.stringify({ exp: 9999999999, sub: "offline" })).replace(/=/g, "");
    return `${header}.${payload}.offline`;
}

export default generateOfflineToken;