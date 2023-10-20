/*let student1={
    firstName:"swapnali",
    lastName:"sardesai",
    roll:4,
    age:22
}

let student2={
    firstName:"sameer",
    lastName:"patankar",
    roll:9,
    age:23
}
//to avoid repetative property name we have to create class

class students{
    fisrtName;
    lastName;
    roll;
    age;
}
let studentno1=new students()
console.log(studentno1)
studentno1.firstName="swapnali"
studentno1.lastName="sardesai"
studentno1.roll=5
studentno1.age=25*/

//program 1
class students {
    constructor(fn, ln, roll, age, marks) {
        this.firstName = fn
        this.lastName = ln
        this.roll = roll
        this.age = age
        this.marks = marks
    }
}
let stud2 = new students("sameer", "patankar", 5, 26, [78, 67, 89])
let stud1 = new students("swapnali", "sardesai", 4, 25)
stud1.city = "pune"// add city property
stud1.roll = 12//updated roll num
stud1.marks = [77.76, 75.74]
delete stud1.city

console.log(stud1)

stud2.marks.push(99)

let z = stud2.marks.filter(function (el) { return el > 80 })
console.log(z)

let d = stud2.marks.reduce(function (acc, el, index, arr) { return acc + el }, 0)
console.log(`average marks are ${d / stud2.marks.length}`)

//using set keyword
// or by using function
class Person{
    setFName(fn1){
        this.FName=fn1
    }
    setLName(ln1){
        this.Lname=ln1
    }
    setAddress(add){
        this.Address=add
    }
}

let objPerson=new Person
objPerson.setFName("sameer")
objPerson.setLName("patankar")
objPerson.setAddress("pune")
console.log(objPerson)