const Airport = require('../src/airport')

describe('Airport object', () => {
	const testAirport = new Airport("DFW")
	const testAirport2 = new Airport("CDG")

	test('airport has a name', () => {
		expect(testAirport.name).toBe("DFW")
	})

	test('airports have a city', (done) => {
		//run getInfo method
		testAirport2.getInfo((err, info) => {
		//log this airport info to console
		console.log(info)
		//expect error to be null
		expect(err).toBeNull()
		//expect the airport country to be FR
		expect(info.city).toEqual('Paris')
		//end asynchrounous test
		done()
	})
})

//Promise test function
test('airports have a city', () => {
    const testAirport = new Airport('CDG')
    return testAirport.getInfoPromise()
        .then(info => {
            expect(info.city).toEqual('Paris')
        })
        .catch(err => {
            expect(err).toBeNull()
        })
})

//Async/Await test function
test('can get information like the city from an airport instance', async () => {
    const CDG = new Airport('CDG')
    const airport = await CDG.getInfoAsync()
    expect(airport.city).toEqual('Paris')
})
})