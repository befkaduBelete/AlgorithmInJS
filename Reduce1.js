const number = [1,2,3,4,5,6]

const sum = number.reduce((p,c)=>{

    console.log(`Previous ${p}` )
    console.log(`Current: ${c}`)
    console.log(`Final Return: ${p+c}`)
    return p + c;
},0)

console.log(sum);