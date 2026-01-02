import { ax } from "../config";


export const postBooking =async(data)=>{
    try {
    
    const response =await ax.post("/bookings/" ,data)
    return response
} catch (error) {
    console.error(error);
    
}
    
}