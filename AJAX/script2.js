//promises=>asynch=>synch
//pending,resolve,reject
let pro = new Promise(function (resolve, reject) {
    let x = 50
    let y = 30
    if (x == y) {
        resolve("pass")
    }
    else {
        reject("fail")
    }
})
//consumed
pro.then(function (str) {
    console.log(str)
}, function (str) {
    console.log(str)
})

//program2
let pro1=new Promise(function(resolve,reject){
    let a=10
    let b=-10
    if(a==b)
    {
        resolve([11,12,13])
    }
    else{
        reject([9,8,7])
    }
})
pro1.then(function(arr){
    console.log(arr[0])
},function(arr2){
    console.log(arr2[1])
})

//program3

let pro3=new Promise(function(resolve,reject){
    let a=1
    let b=2
    if(a==b)
    {
        resolve("hello")
    }
    else{
        reject("bye")
    }
})

pro3.then(function(str){
    console.log(str)
})
.catch(function(str){
    console.log(str)
})
.finally(function(){
    console.log("i will always run")
})