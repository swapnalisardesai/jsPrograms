// var b=20
// console.log(b)
// {
//     console.log(b)
// }
// //let a=20
// //let a=20
// function examp()
// {
//     let a=20
//     var c=20
//    // var c=20
//    // c=111
//     console.log(c)
// }
// c=111
// examp()
// //console.log(c)// c is not defined.
// //console.log(a)

//bind()
//object can borrow method from another object
let info={
    firstName:"swapnali",
    lastName:"sardesai",
    displayName:function(){
   console.log(this.firstName+this.lastName)
    }
}
let info1={
    firstName:"ovi",
    lastName:"patankar"
}

let info2={
    firstName:"vidhi",
    lastName:"patankar"
}
// let fn=info.displayName
// console.log(fn)
  fn=function(){
console.log(this.firstName+this.lastName)
}
fn()//here we get NaN
fn=fn.bind(info2)
fn()//here we get vidhipatankar here we bind the info2 object with fn 

//console.log(info.displayName.bind(info1))

//call():with the call() we can write method that can be used in differnt objects

let car1={
    colour:"red",
    model:"c1"
}

let car2={
    colour:"blue",
    model:"c2"
}

let car3={
    colour:"black",
    model:"c3"
}
// let displayColour=function(){
//    console.log(this.colour)
//    //console.log(this.model)
// }
//displayColour.call(car1)
//displayColour.call(car2)

//call() with arguments
let dispCarwithNo=function(x){
console.log(this.colour)
console.log(x)
}
dispCarwithNo.call(car1,1234)


//apply()
//this method same as call().you can write method that can be used on different objects.
//apply() method accepts arguments in an array.
dispCarwithNo.apply(car1,[1111])




