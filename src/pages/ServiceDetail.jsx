import { useNavigate, useOutletContext, useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { capitalizeFirst } from '../utilities/capitalizeFirst';
import Card from "../components/Card"

export const ServiceDetail = () => {
    const {searchContext:{searchValue}} = useOutletContext();
    const navigate = useNavigate()
    const urlParam = useParams();
    const servicesAgencies = useSelector(state => state.services.servicesAgencies) || []
    const normalizedSearch = searchValue.trim().toLowerCase();


    const agenciesGroup = servicesAgencies.find(item => item.title === urlParam.title);
    const agencies = (agenciesGroup && agenciesGroup.agencies) || [];
    const filteredAgencies = agencies.filter(agency =>
        !normalizedSearch ||
        agency.name.toLowerCase().includes(normalizedSearch)
    );

    
    return (
        // Cards to handle showing each service's businesses
        <div>
            <h1 className="text-xl font-bold mb-4">{capitalizeFirst(urlParam.title)}</h1>
            <div className="grid auto-cols-auto md:grid-cols-4 gap-4 w-full h-full">
                {
                    filteredAgencies.length === 0 ? 
                            
                                <div className="col-span-full text-center text-gray-500 mt-12">
                                    No businesses found for this service.
                                </div>
                        :
                         filteredAgencies.map((agency) => (
                            <Card
                                onClick={() => { navigate(`/services/${urlParam.title}/${agency.service.id}`) }}
                                key={agency.id || agency.name}
                                className="mb-3 hover:-translate-y-2 hover:shadow-lg transition-all rounded-md hover:cursor-pointer"
                            >
                                <div className="flex flex-col space-y-2">
                                    {/* Display agency image if available */}
                                    {agency.service.media.find((img) => img.order === 1) ? (
                                        <img
                                            src={(agency.service.media.find((media) => media.order === 1 && media.media_type === "photo")).file}
                                            alt={`${agency.name} logo`}
                                            className="w-full h-48 object-fill rounded-t-md mb-2"
                                        />
                                    ) : (
                                        <div className="w-full h-48 bg-gray-200 dark:bg-dark rounded-t-md mb-2 flex items-center justify-center text-gray-400 text-sm">
                                            No Image
                                        </div>
                                    )}
                                    <div className="flex flex-col  *:m-2">
                                        <span className="font-semibold text-lg">{agency.service.title}</span>
                                        <div className="text-sm text-gray-600 dark:text-gray-400">{agency.service.description || "No description available."}</div>
                                        <div className="flex flex-row-reverse">
                                            <span className=" font-medium">
                                                For
                                                <span className="ml-1 font-bold ">
                                                    {agency.service.price_cents}$
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        ))
                }
            </div>
        </div>
    )
}

export default ServiceDetail