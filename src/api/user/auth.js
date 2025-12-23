import { ax } from "../config";


export const postAuthUserRefresh = async (refresh) => {
    try {
        const payload = typeof refresh === "string" ? { refresh } : refresh;
        const res = await ax.post("/auth/token/refresh/", payload);
        return res.data;
    } catch (error) {
        if (error.response) throw error.response.data;
        throw error;
    }
};

export default {
    postAuthUserRefresh,
};