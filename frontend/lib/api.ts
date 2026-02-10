export const API_URL = "http://localhost:5000/api";
export const API_BASE_URL = API_URL;

export const api = {
    async post(endpoint: string, data: any) {
        const res = await fetch(`${API_URL}${endpoint}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        let json;
        const text = await res.text();
        try {
            json = JSON.parse(text);
        } catch (e) {
            if (!res.ok) throw new Error(text || "An unknown error occurred");
            return text;
        }

        if (!res.ok) throw new Error(json.title || JSON.stringify(json) || "An error occurred");
        return json;
    }
};
