class Triangle {
    constructor(a, b, c) {
        this.a = a
        this.b = b

        this.c = c
    }

    area() {
        let s = (this.a + this.b + this.c) / 2
        let res = s * (s - this.a) * (s - this.b) * (s - this.c)
        return Math.sqrt(Math.abs(res))
    }

    printDetails(){
        console.log(`Sides ${this.a}, ${this.b}, ${this.c}`)
    }
}

let t1 = new Triangle(3, 4, 5)
let t2 = new Triangle(8, 11, 13)

console.log(t1.area())
t1.printDetails()
// node js/classes.js
// Inheritance in JS
// Overriding in JS
//yt ES6 tutorials