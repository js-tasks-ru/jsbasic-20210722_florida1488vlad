function showSalary(users, age) {
	return users
		.filter(person => person.age <= age)
		.map(person => `${person.name}, ${person.balance}`)
		.join('\n');
};