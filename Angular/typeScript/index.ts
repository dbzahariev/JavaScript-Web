 class Cat {
    constructor(
        public name: string, 
        public age: number){}

        sayHello(): string{
            return `Hello from ${this.name}!`
        }
}

let cat = new Cat('Ivan', 5)
console.log(cat.sayHello())