
//destructuring...
//unpacked the packed data
//on array
let num = [23, 77, 88, 99]
let [a1, a2, a3, a4] = num
console.log(a1)

let names = ["swapnali", "vidhi", "ovi"]
let [n1, n2, n3] = names
console.log(n1)

//program 2
let numbers = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]
let [[s1, s2, s3, s4], [s5, s6, s7, s8], [s9, s10, s11, s12]] = numbers
console.log(s5)
console.log(s9)

let cities = [["pune", "nagpur", "mumbai"], ["kolhapur", "sangli", "satara"]]
let [[i1, i2, i3], [c4, c5, c6]] = cities
console.log(i2)
console.log(c6)


//program 3
//on object
let obj = {
    model: "kia",
    colour: "gray",
}

let { model, colour } = obj//take keys as it is
console.log(model)

let { model: m1, colour: c1 } = obj //alise name m1 and c1
console.log(m1)

//program 3
let information = {
    fullname: "swapnali sardesai",
    parent: {
        mother: "lalita sardesai",
        father: "sampatrao sardesai"
    }
}

let { fullname: fn, parent: { mother: m, father: f } } = information
console.log(m)
console.log(f)

//program 4
let employees = [
    {
        empId: 1,
        empName: "swapnali",
        position: "developer",
        salary: 70000
    },
    {
        empId: 2,
        empName: "sameer",
        position: "tester",
        salary: 50000

    },
    {
        empId: 3,
        empName: "Vidhi",
        position: "data analyst",
        salary: 60000
    }
]

let [{ empId: e1, empName: nm1 }, { empId: e2, empName: nm2 }] = employees
console.log(e1, nm1)

//print employee id and name

for (let i = 0; i <= employees.length - 1; i++) {
    console.log(employees[i].empId, employees[i].empName)
}

employees.forEach(function (el, index, arr) {
    console.log(el.empId, el.empName)
})

//print employee names whose salary >50000
employees.forEach(function (el, index, arr) {
    if (el.salary > 50000) {
        console.log(el.empName, el.salary)
    }
})

let sa = employees.filter(function (el, index, arr) {
    return el.salary > 50000
   // console.log(el.empName)
})
sa.forEach(function(el){
    console.log(el.empName,el.salary)
})

//program 


