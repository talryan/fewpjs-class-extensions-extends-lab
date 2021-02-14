// Your code here

class Polygon {
    constructor(array){
        this.array = array
    }

    get countSides() {
       return this.array.length
    }
    
    get perimeter() {
        return this.array.reduce(((x, y) => x + y), 0)
    }
}

class Square extends Polygon {

    get isValid () {
        const [a, b, c, d] = this.array
        return (a === b && b === c && c === d) ? true : false
    }

    get area () {
        const [a, b] = this.array
        return a * b
    }

}

class Triangle extends Polygon {

    get isValid () {
        const [a, b, c] = this.array
        return ((a + b) > c && (b + c) > a && (a + c) > b && this.array.length === 3) ? true : false
    }

}