//synchronious javascript
//line by line execution of code
function additionA(){
    console.log("I am addition A")
}

function AdditionB(){
    console.log("I am addition B")
}
additionA()
AdditionB()

//asynchronous code
function add1(){
    setTimeout(function(){
        console.log("i am 1")

    },2000)
}

function add2(){
        console.log("i am 2")
}

//add1()
//add2()
//o/p- i am 2 after 2 sec print i am 1

//program: create user=>getId=>user info
//asynch =>synch
//settimeout()

function getUser()
{
        setTimeout(function(){
            console.log("user created")
        },3000)
        setTimeout(function(){
            console.log("get id")
        },2000)
        setTimeout(function(){
            console.log("user info")
        },1000)
    
}
//getUser()

//asynch to synch
//1 call back hell

function getuser1()
{
    setTimeout(function(){
        console.log("user created")
        setTimeout(function(){
            console.log("get id")
            setTimeout(function(){
                console.log("user info")
            },1000)
        },2000)
    },3000)
}
getuser1()
//this code is tightly coupled