import { ax } from "../config";


export const getAvailability = async (id, date) => {
    try {
        const response = await ax.get(`services/${id}/availability/?date=${date}`)
        return response
    } catch (error) {
        console.error(error);

    }
}