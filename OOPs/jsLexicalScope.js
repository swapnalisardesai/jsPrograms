//lexical scope
//ability of function scope to access variables from parent scope

function addA()
{
    let x=10
    let y=20
    console.log(x+y)
    function addB()
    {
        let s=11
        let t=22
        console.log(x+y)
        console.log(s+t)
        function addC()
        {
            console.log(x+y+s+t)
        }
        addC()
    }
    addB()
}
addA()

//program 2
function addNum()
{
    let a=22
    let b=22
    return a+b
    console.log("hello")
}
let m=addNum()//calling the function
console.log(m)//printing the function
//o/p=>44 here it can not print hello bcoz return is always stops the execution of function

//closures
function addEle(r,t)
{
    //let r=9
    //let t=9
    return function(){
        console.log(r+t)
    }
}

let h=addEle(9,9)
console.log(h)
h=function()
{
    console.log(r+t)
}
h()