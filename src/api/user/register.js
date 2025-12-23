import { ax } from "../config";


export const postRegister = async (data) => {

    try {
        const response = await ax.post("/auth/register/", data);
        return response;
    } catch (error) {
        return error;
    }
}