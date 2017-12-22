function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName + "! Nice to see you.";
}
var user = { firstName: "Santa", lastName: "Claus" };
console.log(greeter(user));
