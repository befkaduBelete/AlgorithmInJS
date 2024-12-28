const people = [
    {name:'Kyle',age:26},
    {name:'John', age:31},
    {name:'Sally',age:42},
    {name:'Jill',age:42}
]

const result = people.reduce((groupedPeople,person)=>{
    const age = people.age
    if(groupedPeople[age]==null) groupedPeople[age]=[]
    //else 
    groupedPeople[age].push(person)
    return groupedPeople;
},{})

console.log(result)