let num= 2;
let res = []
function calTable(num){
    for(var i = 1; i<=10; i++){
        res.push(`${num} * ${i} = ${num*i}`)
    }
    res.forEach(i => console.log(i))

}
calTable(5)