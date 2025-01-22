function createProfile({name,email}){
    return {name,email};
}

const person={
    name:"Sai Charan",
    age:20,
    email:"sai153@gmail.com",
    address:"Warangal"
}
const updatePerson=createProfile(person);
console.log(updatePerson);