interface IPerson {
    name: string
    age: number
}

function slove(person: IPerson) {
    console.log(person.name)
}

slove({    name: 'ivan', age:5})
