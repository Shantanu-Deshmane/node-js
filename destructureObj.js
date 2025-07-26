const {userData} = require('./data')

// import { userData } from "./data";
// console.log(userData)
// console.log(userData)
userData.forEach((data)=>{
    console.log("Name: "+data.name+", Age: "+data.age+", City : "+data.city)
    
})