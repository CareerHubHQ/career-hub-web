import ApiClient from "../utils/api-client";

const AuthService = {
    apiClient: new ApiClient("http://localhost:8000"),
    login: async function (username, password) {
        const data = { username: username, password: password }
        return await this.apiClient.post("/api/v1/auth/login", data);
    }
}

export default AuthService