import fetch from 'node-fetch';

//Exercise 1 - Create a promise where it will resolve if we get a value greater than or equal 3 and reject if we get a value less than 3. Console the value and convert into a String if resolved. If rejected, create your own console error message.

//Extension: If your promise resolves, the result will be the amount of rotations to the right for the array [1,2,3,4,5]. Your callback will return the rotated array by the result amount

// Input: nums = [1,2,3,4,5,6,7], result = 3(could vary depend on what you get for the result) [7,1,2,3,4,5,6] [6,7,1,2,3,4,5] [5,6,7,1,2,3,4]
// Output: [5,6,7,1,2,3,4]

function aRandomNumber() {
 return Math.floor(Math.random() * 5) 
}

//Promises - task - resolved or rejected
const promiseExample = new Promise(function(resolve, reject) {

  //Generate random number 0-5
  const result = aRandomNumber() 

  if(result >= 3) {
    resolve(result)
  } else {
    reject(result)
  }
 } 
)

//resolved - .then rejected -.catch
promiseExample.then((res, arr = [1,2,3,4,5,6,7]) => {
  let lastHalf = arr.splice(arr.length - res)

  console.log(arr, lastHalf, res)
}).catch((res) => {
  console.log(`Value ${res} is less than three`) //template literal
})

//Exercise 2: using fetch + promises
//Fetch a couple of pokemon
//link to api: https://pokeapi.co/

// fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
// .then((res) => res.json())
// .then((data)=> console.log(data))
// .catch((err) => console.error(err))

//Exercise 3:
//pick an API from this list, make sure you choose one where auth is NO
//https://github.com/public-apis/public-apis
//experiment fetching data by using async/await.
const fetchBoredActivity = async (id) => {
    try {
        const res = await fetch('https://www.boredapi.com/api/activity');
        const data = await res.json()
        return data
    } catch(err) {
        console.log(err)
    }
}

fetchBoredActivity().then((data) => {
    console.log(data)
})