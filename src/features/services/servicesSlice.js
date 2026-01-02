import { createSlice } from "@reduxjs/toolkit";

const servicesSlice = createSlice({
    name: "services",
    initialState: {
        servicesDetail: [],
        services: [],
        servicesAgencies: [],
        selectedService: []
    },
    reducers: {
        setServicesList: (state, action) => {
            // Gather unique service slugs from payload
            const slugSet = new Set();
            action.payload.forEach((result) => {
                if (result.slug) {
                    slugSet.add(result.slug);
                }
            });
            state.services = Array.from(slugSet);
        },
        setServicesDetail: (state, action) => {
            // Defensive copy, ensure always array
            state.servicesDetail = Array.isArray(action.payload) ? [...action.payload] : [];
        },
        setServicesAgencies: (state) => {
            // Group by service slug, making agencies array including agency and service info
            const grouped = {};

            // servicesDetail = array of { ...service, agency: {id, name, ...}, slug }
            state.servicesDetail.forEach(service => {
                if (!(service && service.slug && service.agency)) return;

                if (!grouped[service.slug]) grouped[service.slug] = [];

                grouped[service.slug].push({
                    id: service.agency.id,
                    name: service.agency.name,
                    description: service.agency.description,
                    service: {
                        id: service.id,
                        slug: service.slug,
                        title: service.title,
                        description: service.description,
                        duration_minutes: service.duration_minutes,
                        buffer_minutes: service.buffer_minutes,
                        capacity: service.capacity,
                        price_cents: service.price_cents,
                        visible: service.visible,
                        created_at: service.created_at,
                        is_active: service.is_active,
                        media: service.media,
                        bookings_count: service.bookings_count,
                    }
                });
            });

            // Transform to array like [{ slug, agencies: [...] }, ...]
            state.servicesAgencies = Object.entries(grouped).map(([title, agencies]) => ({
                title,
                agencies
            }));
        },
        setSelectedService: (state, action) => {
            state.selectedService = action.payload
        }
    }
});

export const { setServicesList, setServicesDetail, setServicesAgencies ,setSelectedService} = servicesSlice.actions;

export default servicesSlice.reducer;