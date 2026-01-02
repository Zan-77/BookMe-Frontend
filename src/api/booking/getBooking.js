import { ax } from "../config"

export const getBooking = async () => {
   
    let page = "/bookings/?page=1"
    let results = []

    try {
        while (page) {
            const response = await ax.get(page)
            results.push(...response.data.results);
            page = response.data.next
        }
        return results
    } catch (error) {
        return error
    }
}

