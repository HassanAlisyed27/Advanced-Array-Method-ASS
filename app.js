// What these methods does:
// forEach → Do something
// map → Change every item
// filter → Select some items
// find → Find one item
// some → Is there at least one?
// every → Do all satisfy this?
// reduce → Turn many items into one result

// The way it return the value is different for each method
// map     → array → array
// filter  → array → array
// find    → array → one item
// some    → array → true/false
// every   → array → true/false
// reduce  → array → one value

const emps = [
    { name: "rahul", age: 40 },
    { name: "ghandi", age: 21 },
    { name: "modi", age: 30 }
]


const ages = emps.map(emps => emps.age)
console.log(ages);

const filteredAge = emps.filter(emps => emps.age > 30)
console.log(filteredAge);

const find = emps.find(emps => emps.name = 'ghandi')
console.log(find);

const some = emps.some(emps => emps.age > 30)
console.log(some);

const every = emps.every(emps => emps.age > 18)
console.log(every);

const fruits = [
    { name: "apple", price: 40 },
    { name: "banana", price: 21 },
    { name: "melon", price: 30 }
]

const reduce = fruits.reduce((sum, item) => sum + item.price, 0)
console.log(reduce);