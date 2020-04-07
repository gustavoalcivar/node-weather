const axios = require('axios')
const {openWeatherMapAppId} = require('../keys/keys')

const getWeather = async (lat, lon) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${openWeatherMapAppId}&units=metric`)
    const data = resp.data.main
    
    if(!data) {
        console.log(`No se pudo consultar el clima de las coordenadas (LAT: ${lat}, LON: ${lon})`)
        return
    }
    
    return {
        temp: data.temp,
        pressure: data.pressure,
        humidity: data.humidity
    }
}

module.exports = {
    getWeather
}