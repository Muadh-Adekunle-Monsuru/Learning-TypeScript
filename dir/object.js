"use strict";
const printDetails = (person) => {
    return 'The name is' + person.name + 'the age is' + person.age;
};
const john = {
    name: 'John Doe',
    age: 71,
    happy: false,
};
console.log(printDetails(john));
