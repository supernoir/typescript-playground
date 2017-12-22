interface Person {
	firstName: string,
	lastName: string
}

function greeter(person: Person){
return `Hello, ${person.firstName} ${person.lastName}! Nice to see you.`
}


let user = { firstName: "Santa", lastName: "Claus" }

console.log(greeter(user))
