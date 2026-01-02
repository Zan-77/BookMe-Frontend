import { ax } from "../config";



export const getAgencyOpeningHour = async(id)=>{
    const response = await ax.get(`/opening-hours/?agency=${id}`)
    console.log(response);
    
}