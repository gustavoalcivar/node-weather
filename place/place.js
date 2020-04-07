const axios = require('axios')
const {place_x_rapidapi_key} = require('../keys/keys')

const getLatLong = async (address) => {
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeURI(address)}`,
        headers: {'x-rapidapi-key': place_x_rapidapi_key,
            'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com'}
        });
    
    const resp = await instance.get()
    
    const data = resp.data.Results[0]

    if(!data) {
        console.log(`No se encontró la dirección ${address}`)
        return
    }

    return {
        place: data.name,
        lat: data.lat,
        lon: data.lon
    }
}

module.exports = {
    getLatLong
}