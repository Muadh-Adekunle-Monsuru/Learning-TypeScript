var printDetails = function (person) {
    return 'The name is' + person.name + 'the age is' + person.age;
};
var john = {
    name: 'John Doe',
    age: 71,
    happy: false,
};
console.log(printDetails(john));
