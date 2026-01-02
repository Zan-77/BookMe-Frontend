import { useSelector } from "react-redux"
import { useState } from "react"
import { useNavigate, useOutletContext, useParams } from "react-router"
import { capitalizeFirst } from "../utilities/capitalizeFirst"
import Card from "../components/Card"
import Button from "../components/Button"


const Services = () => {
  const {searchContext:{searchValue}} = useOutletContext();
  const services = useSelector(state => state.services.services) || []
  const servicesAgencies = useSelector(state => state.services.servicesAgencies) || []

  const normalizedSearch = searchValue.trim().toLowerCase();

  const agenciesCountByTitle = servicesAgencies.reduce((acc, item) => {
    acc[item.title] = item.agencies ? item.agencies.length : 0
    return acc
  }, {})

  const filteredServices = services.filter((service) => {
    // Show all if there is no search text
    if (!normalizedSearch) return true
    // services is an array of titles (strings)
    return service.toLowerCase().includes(normalizedSearch)
  })
  return (
    <div className="grid auto-cols-auto md:grid-cols-4 gap-4 w-full h-full">
      {filteredServices.map((service) => (
        <Card

          key={service}
          className="mb-3 p-4 hover:-translate-y-2 transition-all rounded-md"
        >
          <div className="flex justify-between items-center">
            <span>{capitalizeFirst(service)}</span>
            <Button to={`/services/${service}`} variant="text">
              Browse All {agenciesCountByTitle[service] || 0} Businesses
            </Button>
          </div>
        </Card>
      ))}
    </div>
  )
}

export default Services