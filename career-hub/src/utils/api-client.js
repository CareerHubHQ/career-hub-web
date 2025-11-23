class ApiClient {
    constructor(baseUrl) {
        if (!baseUrl) {
            throw new Error("baseURL is required for ApiClient")
        }
        this.baseUrl = baseUrl
    }

    _buildRequestConfig(options = {}) {
        const { headers = {}, ...otherOptions } = options
        const defaultHeaders = {
            "Content-Type": "application/json",
            "Accept": "application/json",
        };
        const config = {
            ...otherOptions,
            headers: {
                ...defaultHeaders,
                ...headers,
            }
        };

        // Make sure the body is already strinfied if it exist.
        if (config.body && typeof config.body !== "string") {
            throw new TypeError("Options body must be a string");
        }
        return config;
    }

    async _request(endpoint, options = {}) {
        const url = `${this.baseUrl}${endpoint}`
        const { method } = options;

        try {
            const config = this._buildRequestConfig(options);
            const response = await fetch(url, config);

            // Handle non-JSON responses
            const contentType = response.headers.get('content-type');
            const data = contentType?.includes('application/json')
                ? await response.json()
                : await response.text();

            if (!response.ok) {
                // FIXED: Constructor parameter order
                throw new ApiError(`${method} Error`, response.status, data, response.statusText)
            }
            return data;

        } catch (error) {  // FIXED: Added 'error' parameter to catch block
            if (error instanceof ApiError) throw error;
            throw new ApiError(`${method} Network Error`, 0, { message: error.message }, 'Network Error');
        }
    }

    async post(endpoint, data) {
        const options = {
            method: "POST",
            body: JSON.stringify(data)
        }
        return await this._request(endpoint, options);
    }
}

class ApiError extends Error {
    constructor(message, status, data, statusText) {
        super(message);
        this.name = 'ApiError';
        this.status = status;
        this.data = data;
        this.statusText = statusText;
    }
}


export default ApiClient;