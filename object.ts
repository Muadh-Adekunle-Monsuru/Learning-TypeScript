interface PersonType {
	name: string;
	age: number;
	happy: boolean;
}

const printDetails = (person: PersonType) => {
	return 'The name is' + person.name + 'the age is' + person.age;
};
const john: PersonType = {
	name: 'John Doe',
	age: 71,
	happy: false,
};
console.log(printDetails(john));
