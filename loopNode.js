let a = [1,2,3,4,5,10]
a.forEach((i) =>{
    console.log(i)
})

for(let i in a){
    console.log(i+ " : "+a[i])
}

a.map((i)=>{
    console.log("Mapped : "+i)
})

const data = a.filter(i => i>2)
console.log(data)

let words = ["Shantanu","Sanika", "Kalidas","Deshmane","Rukminee"]
console.log(words.filter(word => word.length <= 8

))

console.log(a.reduce((total,num) => total+num))

console.log("Doubled Arr = "+a.map(i => i*2))