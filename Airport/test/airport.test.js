const Airport = require('../src/airport')

describe('Airport object', () => {
	const testAirport = new Airport("DFW")
	const testAirport2 = new Airport("CDG")

	test('airport has a name', () => {
		expect(testAirport.name).toBe("DFW")
	})

	test('airports have a country', (done) => {
		//run getInfo method
		testAirport2.getInfo((err, info) => {
		//log this airport info to console
		console.log(info)
		//expect error to be null
		expect(err).toBeNull()
		//expect the airport country to be FR
		expect(info.country).toEqual('FR')
		//end asynchrounous test
		done()
	})
})

})