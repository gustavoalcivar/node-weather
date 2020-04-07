const argv = require('./config/yargs').argv
const {getLatLong} = require('./place/place')
const {getWeather} = require('./weather/weather')

const getInfo = async (address) => {
    try {
        const coords = await getLatLong(address)
        const weather = await getWeather(coords.lat, coords.lon)
        return `En ${address} hay una temperatura de ${weather.temp}ºC, una presión de ${weather.pressure} y una humedad del ${weather.humidity}%`
    } catch {
        return `No se pudo consultar el clima de ${address}`
    }
}

getInfo(argv.address)
    .then(console.log)
    .catch(console.log)