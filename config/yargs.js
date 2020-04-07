const address = {
    demand: true,
    alias: 'a',
    desc: 'Address to search'
}

const argv = require('yargs').options({address}).argv

module.exports = {
    argv
}