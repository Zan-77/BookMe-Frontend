import { ax } from "../config";


export const postAuthUserRefresh = async (refresh) => {
    try {
        const res = await ax.post("/auth/token/refresh/", { refresh: refresh });
        if (res.status === 200 && res.data && res.data.access) {
            return res.data.access;
        }
        return null;
    } catch (error) {
        console.error("Token refresh error:", error);
        return null;
    }
};

export default {
    postAuthUserRefresh,
};