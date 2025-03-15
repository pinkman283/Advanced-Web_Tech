/*const number=[2,5,2,24]
const evenNumber=number.filter(num=> num%2===0)
console.log(evenNumber)
const firstEven=number.find(num=> num%2===0)
console.log(firstEven)
const sliced=number.slice(1,5)
console.log(sliced)
number.push(17)
console.log(number)
const moreNum=number.concat([92,4,6,3])
console.log(moreNum)
console.log(number.join("-"))
const double=number.map(num=> num*2)
console.log(double)
const sum = number.reduce((acc, n) => {
   return acc + n}, 0);
console.log(sum);

const name="shihab shovon"
console.log(`hello my name is ${name}`)*/

const callback=(name,calls)=>
{
    setTimeout(() => {
        calls(`hello ${name}`)
    }, 2000);
}

const msg1= (message) => {
    console.log(message)
}

const msg2= (message)=>{
    console.log(`message received ${message}`)
}

callback("shihab",msg1)
callback("shovon",msg2)