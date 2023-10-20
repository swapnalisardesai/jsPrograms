let firstName = "swapnali"
let lastName = "patankar"
let city = "PUNE"
console.log(typeof (firstName))//string
console.log(firstName.length)

let p1="ovi"
let p2="vidhi"
let p3=3
let p4=5
console.log(p1+p2)
console.log(p1+p2+p3)
console.log(p3+p2+p1)
console.log(p3+p4+p2)

//string concatination
//using +
console.log("my first name is "+firstName,"my last name is "+lastName)

//string interpolation
//using ``(back ticks)
console.log(`my first name is ${firstName} my last name is ${lastName}`)

//in js everything is object



//string stores the value by index
//      0 1 2 3 4 5 6 7
//name="s w a p n a l i"

//1 toUpperCase()
//converts all the alphabetical characters in upperCase letter
console.log(firstName.toUpperCase())
console.log(firstName)

//2 toLowerCase()
//converts all the alphabetical chracters in lower case
console.log(city.toLowerCase())

//3 indexOf()
//it gives position of first occarance of substring
console.log(firstName.indexOf("a"))
console.log(firstName.indexOf("r"))//-1

//4 includes()
//it checks the given substring is present or not
//it returns boolean value
console.log(firstName.includes('p'))
console.log(lastName.includes('l'))

//5 trim()
//it removes space from start and end of string
//returns new string
let a1 = " hello world "
console.log(a1.length)
let a2 = a1.trim()
console.log(a2)
//console.log(a1.trim())
console.log(a2.length)

//6 trimStart()
//it removes space from start of string
let b1 = " welcome "
console.log(b1.length)
let b2 = b1.trimStart()
console.log(b2)
console.log(b2.length)

//7 trimEnd()
//it removes space from end of string
let c1 = b1.trimEnd()
console.log(c1)
console.log(c1.length)

//8 startsWith()
//check weather string start with given character or substring
//returns boolean value
let animal = "elephant"
console.log(animal.startsWith('ele'))
console.log(animal.startsWith("w"))

//9 endsWith()
//check weather string end with given character or substring
console.log(animal.endsWith('ph'))
console.log(animal.endsWith('nt'))

//10 split()
let Myname="swapnali-sardesai"
let x=console.log(Myname.split("-"))

//11 charcodeat()
console.log(Myname.charCodeAt(1))

//12 charAt()
console.log(Myname.charAt(3))

//13 slice()
console.log(Myname.slice(0,5))








