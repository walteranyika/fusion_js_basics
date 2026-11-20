//node --version

//unpacking
import subtract, {area_triangle, divide as division, multiply} from "./hesabu.js";

import * as Xyz from "./hesabu.js"

Xyz.area_triangle(3,4,5)

let colors = ["red", "green", "blue"]

// let r = colors[0]
let [r, , b] = colors

console.log(r, b)

//node js/es6.js

// let x= 1
// let y=2
//
// [x, y] = [y, x]
//
// console.log(x, y)

// spread operator
function sum(...nums){
    let total = 0
    for(let n of nums){
        total += n
    }
    console.log(total)
}
// reduce js
sum(8, 9, 10)
sum(10, 10, 10, 10)

let scores1 = [82, 56, 66]
let scores2 = [42, 71]

let merged = [81, ...scores1, ...scores2, 72]

console.log(merged)

let patient = {name: "Hilda", age: 21}

let updatedPatient = {...patient, gender:"F", outpatient:true, age:22}

console.log(updatedPatient)



// modules == files

let area = area_triangle(10, 20, 31)

let div = division(10,2)

let product = multiply(10, 20)

console.log(area, div, product)

subtract(10, 5)

