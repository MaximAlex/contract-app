export const API_BASE_URL = process.env.NEXT_PUBLIC_APP_MOCK_API

class Http {
    static async get(path: string) {
        console.log(`${API_BASE_URL}${path}`);
        return await fetch(`${API_BASE_URL}${path}`, {
            cache: 'no-store'
        });
    }
    static async post(path: string, data: any) {
        const response = await fetch(`${API_BASE_URL}${path}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        const responseData = await response.json();
        return responseData;

    }

    static async put(path: string, data: any) {
        try {
            const response = await fetch(`${API_BASE_URL}${path}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            const responseData = await response.json();
            return responseData;
        } catch (error: any) {
            throw new Error(error);
        }
    }

    static async delete(path: string) {
        try {
            const response = await fetch(`${API_BASE_URL}${path}`, {
                method: 'DELETE',
            });
            const responseData = await response.json();
            return responseData;
        } catch (error: any) {
            throw new Error(error);
        }
    }
}

export default Http;