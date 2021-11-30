import { readFile } from 'fs/promises'

const birdAPI = async (thisBird) => {
    try {
            const res = await readFile('./birds.json')
            //return all airports as json object
            const birds = JSON.parse(res)
            //find airport whose iata code matches this airport name
            const bird = birds.find(bird => bird.name === thisBird)         

            return bird
    } catch(err) {
        console.error('This is an error')
    }
} 

birdAPI('American Black Duck').then((data) => {
    console.log(data)
})