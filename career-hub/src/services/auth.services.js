import ApiClient from "../utils/api-client";

const AuthService = {
    apiClient: new ApiClient("http://localhost:8000"),
    login: async function (username, password) {
        const data = { username: username, password: password };
        return await this.apiClient.post("/api/v1/auth/login", data);
    },

    signUp: async function (email, password) {
        const data = { email: email, password: password };
        return await this.apiClient.post("/api/v1/auth/signup", data);
    }
}

export default AuthService