const Empresa = require('../models/Empresa');
const ParseStrigAsArray = require('../utils/parseStringAsArray');

module.exports = {
    async index(request, response){
        const { Latitude, Longitude, Services }

        const servicesArray = ParseStrigAsArray(Services);
        
        const search = await Services.Find({
            services: {
                $in: servicesArray,
            },
            location: {
                $near: {
                    $geometry: {
                        type: "Point",
                        coordinates: [Latitude, Longitude],
                    },
                    $maxDistance: 10000,
                },
            },
        });
        return response.json({ search: [] });
    }
}