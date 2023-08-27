//let a=10
function calculator(x,y)
{
    console.log(x+y)
    console.log(x-y)
    console.log(x*y)
    console.log(x/y)
    console.log(x%y)
}
calculator(4,2)

//program1 
//Function Without Parameter and Without Return Type.
function add()
{
    console.log(10+10)
}
add()
add()

//program2
//function with parameter without return type
function addb(p,q)
{
    console.log(p+q)
}
addb(2,2)

//program 3
//function with parameter with return type
function addc(a,b)
{
    return a+b
}
let c=addc(4,4)
console.log(c)
console.log(c*2)
console.log(c/2)

//**********************types of function******************
//********************function declaration***************** 
//Program1....
function subA(x,y)
{
    return x-y
}
let i=subA(4,2)
console.log(i)

//program2.....
function Multi(a,b)
{
    return a*b
   // console.log()
}
let m=Multi(7,8)
console.log(m)


//***********************function expression**************** 
//program1.....
let subB= function(x,y)
{
    return x-y
}
let p=subB(12,3)
console.log(p)

//program2......

let devision=function(j,k)
{
    return j/k

}
r=devision(20,2)
console.log(r)

//*******************arrow function*********************** 
//program1.....
let subC=(x,y)=>{
    return x-y
}
q=subC(9,4)
console.log(q)

//program2.....

let mod=(s,t)=>{
    return s%t
}
u=mod(17,4)
console.log(u)
