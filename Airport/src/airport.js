const fs = require('fs')
const { readFile } = require('fs/promises')

class Airport {
	constructor(name) {
		this.name = name
		this.planes = []
	}

	addPlane(plane) {
		this.planes.push(plane)
	}

	getInfo(callback) {
        //read the json file
        fs.readFile('./files/airportsData.json', (err, data) =>{
            //return all airports as json object
            const airports = JSON.parse(data)
            //find airport whose iata code matches this airport name
            const airport = airports.find(airport => airport.iata === this.name)
            callback(err,airport)
        })
    }

    getInfoPromise() {
        return new Promise((resolve, reject) => {
            fs.readFile('./files/airportsData.json', (err, data) =>{
                if(err) return reject(err)

                const airports = JSON.parse(data)
                const [airport] = Object.keys(airports)
                    .filter(airportCode => airports[airportCode].iata === this.name)
                    .map(airportCode => airports[airportCode])

                resolve(airport)

            })
        })
    }

    async getInfoAsync() {
        try {
                const data = await readFile('./files/airportsData.json')
                //return all airports as json object
                const airports = JSON.parse(data)
                 //find airport whose iata code matches this airport name
                const airport = airports.find(airport => airport.iata === this.name)

                return airport
        } catch(err) {
            console.error('This is an error')
        }
    } 

}

module.exports = Airport