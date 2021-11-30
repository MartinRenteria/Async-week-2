import { readFile } from 'fs/promises'
import fetch from "node-fetch";

// const birdAPI = async (thisBird) => {
//     try {
//             const res = await readFile('./birds.json')
//             //return all airports as json object
//             const birds = JSON.parse(res)
//             //find airport whose iata code matches this airport name
//             const bird = birds.find(bird => bird.name === thisBird)         

//             return bird
//     } catch(err) {
//         console.error('This is an error')
//     }
// } 

// birdAPI('American Black Duck').then((data) => {
//     console.log(data)
// })

//Horoscope fetch 
// const fetchHoroscope = async (sign) => {
//     const url = `https://aztro.sameerkumar.website/?sign=${sign}&day=today`
//     try {
//         const res = await fetch(url, {
//             method: 'POST'
//         })
//         const data = await res.json();
//         return data
//     } catch (err){
//         console.log(err)
//     }
// }
// fetchHoroscope('cancer').then((data) =>{
//     console.log(data)
// })

// Dad jokes

const fetchGender = async (name) => {
    const url = `https://api.genderize.io?name=${name}`
    try {
        const res = await fetch(url)
        const data = await res.json();
        return data
    } catch (err){
        console.log(err)
    }
}
fetchGender('mirsa').then((data) =>{
    console.log(data)
})