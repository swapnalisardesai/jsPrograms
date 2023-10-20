let students = [
    {
        fullName: "swapnali patankar",
        city: "pune",
        skills: ["sql", "js", "python"],
        age: 25
    },
    {
        fullName: "sara desai",
        city: "mumbai",
        skills: ["java", "dot net", "python"],
        age: 25
    },
    {
        fullName: "monika sinha",
        city: "delhi",
        skills: ["sql", "js", "python", "c++"],
        age: 25
    },
    {
        fullName: "sameer patankar",
        city: "pune",
        skills: ["sql", "js", "java"],
        age: 25
    }
]

//program 1:print full name of every student
students.forEach(function (el) {
    console.log(el.fullName)
})

//program 2:print full name with number of skills
students.forEach(function (el) {
    console.log(el.fullName, ":", el.skills.length)
})

//program 3:print name of student who have java skill

students.forEach(function (el, index, arr) {
    if (el.skills.includes("java")) {
        console.log(el.fullName)
    }
})

//program 4:add selenium to every skill
students.forEach(function (el, index, arr) {
    el.skills.push("selenium")
})

console.log(students)

//program 5:add working city property with value banglore
students.forEach(function (el) {
    el.workingCity = "banglore"
})
console.log(students)

//program 6:calculate avg age of students
let total = students.reduce(function (acc, el, index, arr) {
    return el.age + acc

}, 0)
console.log("average age is:", total / students.length)


//string concatination(+)

let a = 10
let b = "sham"
let c = 30
let d = "ram"
//number+string=string
//number+number=number
//string+number=string
//string+string=string

console.log(a + b)//10+sham=>10sham
console.log(a + c)//10+30=>40
console.log(d + c)//ram+30=>ram30
console.log(b + d)//sham+ram=>shamram
console.log(a + b + c)//10+sham+30=>10sham30
console.log(a + c + b)//10+30+sham=>40sham
console.log(a + c + a + b)//10+30+10+sham=>50sham

//program :print mumbai in reverse
let city = "mumbai"
let str = ""
for (let i = 0; i <= city.length; i++) {
    str =city[i]+str
}
console.log(str)


