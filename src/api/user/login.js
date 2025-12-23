import { ax } from "../config";

export const postLogin = async (data) => {
    try {
        const response = await ax.post("/auth/login/", data);
        return response;
    } catch (error) {
        return error;
    }

}