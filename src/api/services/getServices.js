import { ax } from "../config";
import { setServicesDetail, setServicesList, setServicesAgencies } from "../../features/services/servicesSlice";
import { useDispatch } from 'react-redux';



export const getAllServices = async () => {
    let page = "/services/?page=1"
    let results = []
    const dispatch = useDispatch();
    
    try {
        while(page){
            const response = await ax.get(page)
                
            results.push(...response.data.results);
            
            page = response.data.next
        }
        dispatch(setServicesDetail(results));
        dispatch(setServicesList(results));
        dispatch(setServicesAgencies())
            return results
    } catch (error) {
        return error
    }

}


export const getSearch = async (searchQuery) => {
    try {
        const response = await ax.get(`/services/?search=${searchQuery}`)
        if (response.status === 200)
            return response;
    } catch (error) {
        return error;
    }
}

