// const { send } = require('./send')
// const { read } = require('./receive')
import { send } from '../send.mjs';
import { read } from '../receive.mjs';




function makeRequest(url, data){
    send(url, data)
    return read()

    
}




const responseData = makeRequest('https://www.google.com','data')

console.log("this is the data", responseData)

// console.log(responseData)  





