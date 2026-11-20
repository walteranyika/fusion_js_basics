export function area_triangle(a, b, c) {
    let s = (a + b + c) / 2
    let res = s * (s - a) * (s - b) * (s - c)
    return Math.sqrt(Math.abs(res))
}


function divide(a, b) {
    return a / b
}

const multiply = (a, b) => a * b


export default function subtract(a, b) {
    return a - b
}


export {multiply, divide}
//TODO use debug tool