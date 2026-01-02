import { ax } from "../config"; 


export const GetAgencies =async(id)=>{
    try {
        
        const response = await ax.get(`/agencies/${id}/`)
        return response.data
    } catch (error) {
        console.error(error);
            
    }
}