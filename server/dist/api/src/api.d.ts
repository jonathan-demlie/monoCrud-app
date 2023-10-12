declare const api: import("axios").AxiosInstance;
export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    phoneNumber: string;
}
export default api;
