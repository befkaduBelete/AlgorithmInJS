const people =[
    {name:"A",age:26},
    {name:"B",age:42},
    {name:"C",age:42},
    {name:"D",age:31},
]

const result = people.reduce((groupedPeople,person,i,a)=>{
    //let i=1;
    const age = person.age;
    if(groupedPeople[age]==null)
        groupedPeople[age]=[]

        console.log("Index: ", i),
        console.log("Original Array",a)

        console.log("New Array: ", groupedPeople)

    groupedPeople[age].push(person)
    //i++;
    //console.log(a)
    return groupedPeople;
},{})

console.log(result)