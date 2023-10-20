let a=[]//blanck map
let b={}//blank object

//in object keys are always string
//in map key can be any datatype
//map datatype

let myMap=new Map
//let myMap2=new Map

//1 set()
//add key values to map
myMap.set(1,"roll number")
myMap.set("swapnali","first name")
myMap.set(20,"age")
console.log(myMap)

//myMap2.set(2,"roll number")
//myMap2.set("sameer","first name")
//myMap2.set(30,"age")
//console.log(myMap2)


//2 get()
//to retrive value of given key
console.log(myMap.get("swapnali"))
//console.log(myMap)

//3 has()
console.log(myMap.has(1))//true

//4 clear()
//myMap.clear()
console.log(myMap)

//5 delete()
//deleted key value from map
//console.log(myMap.delete("swapnali"))
console.log(myMap)

//6 foreach()
myMap.forEach(function(val,key){
    console.log(val,key)
})

//7 values()
//it gives values of map
console.log(myMap.values())

//8 entries()
console.log(myMap.entries())

// size property
console.log(myMap.size)

let m1=new Map([["sid",1],["sname","sara"],["lname","desai"]],
[["sid",2],["sname","swapna"],["lname","sardesai"]]
)
console.log(m1)

for(let val of m1.values())
{
    console.log(val)
}

for(let key of m1.keys())
{
    console.log(key)
}

for(let [k,v] of m1.entries())
{
    console.log(k,v)
}