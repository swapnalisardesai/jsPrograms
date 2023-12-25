//functions
//numbers as parameter number as return type
function add(p, q) {
    return p + q
}
let r = add(10, 10)
console.log(r)
console.log(typeof (r))

//string as paramere string as return type
function printString(str) {
    return "hello " + str
}
let str3 = printString("world")
console.log(str3)

//boolean as parameter boolean as return type

function canDrive(age,vehiAvail){
    if(age>=18 && vehiAvail){
        return true
    }
    else{
        return false
    }
}

let a=canDrive(19,true)
console.log(a)

//array as parameter array as return type
let cities=["pune","kolhapur","sangali"]
function addCity(list,ele){
    list.push(ele)
    return list
}
let b=addCity(cities,"satara")
console.log(b)

//object as parameter object as return type
let info={
    firstName:"swapnali",
    lastName:"sardesai"
}

function addLang(obj,lang)
{
    obj.Language=lang
    return obj
}
let s=addLang(info,"english")
console.log(s)

//set as parameter set as return type
let mySet= new Set()

function addSetVal(setPara,val){
    setPara.add(val)
    return setPara

}
let m=addSetVal(mySet,"swapnali")
addSetVal(mySet,1)
addSetVal(mySet,1)
console.log(m)
console.log(typeof(m))


/*let letters=new Set(['a','b','c','d'])
console.log(letters)
letters.add('b')
console.log(letters)
console.log(typeof(letters))
*/

//map as parameter map as return type

let myMap=new Map

function addMapVal(Mpara,val1,val2)
{
    Mpara.set(val1,val2)
    return Mpara
}
let m1=addMapVal(myMap,1,"Id")
console.log(m1)
console.log(typeof(m1))

//function as parameter and function as return type

let add1=function(x,y)
{
    return x+y
}

function addition(fn,v1,v2){
    let v3=fn(v1,v2)
    return v3
}
 let c= addition(add1,4,4)
 console.log(c)