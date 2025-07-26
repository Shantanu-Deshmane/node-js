let data = new Promise((res, rej)=>{
    let age = 20;
    age>18?res("Promise resolved, age more than 18!!")
    :rej("Rejected, age lwss than 18!!")
})

data.then((e) => console.log(e))
.catch((e) => console.log(e))
console.log(data)