const people = [
    { name: "Bekele", age: 25 },
    { name: "Abyote", age: 35 },
    { name: "Amen", age: 10 }
];

const oldest = people.reduce((p, c) => {
    if (!p.age || c.age > p.age) {
        return c; // Update to the current person if they are older
    }
    return p; // Keep the previous person
}, {});

console.log(oldest);