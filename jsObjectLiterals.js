let info = ["swapnali", "patankar", 25, 4]
console.log(info[0])
console.log(info[1])
console.log(info[2])
console.log(info[3])

//value retrive by index
console.log(info[0])

//value update by index
info[1] = "sardesai"
console.log(info)

//add
info.push("pune")
console.log(info)
info.unshift("Mrs")
console.log(info)

//delete
info.pop()
console.log(info)
info.shift()
console.log(info)
info.splice(2, 1)
console.log(info)


//obect literal......

let info1 = {
    //key:      value
    //property: value
    firstName: "swapnali",
    lastName: "patankar",
    age: "25",
    rollNo: 4
}
console.log(info1)

//object does not stores the value by index
console.log(info1[0])//undefined

//object does not allow duplicate key or property
let birds = {
    colour: "blue",
    legs: 2,
    eyes: 2,
    // colour: "red"
}
console.log(birds)//it gives last duplicated key and value

//retrive values in object.....
//using dot notation and bracket notation
console.log("************retrive Using dot notation****************")
console.log(birds.colour)
console.log(birds.legs)
console.log(birds.eyes)

console.log("************retrive Using bracket notation************")
console.log(birds['colour'])
console.log(birds["eyes"])
console.log(birds['legs'])


//update key values in object.....
console.log("************update Using dot notation****************")
birds.colour = "red"
console.log(birds)

console.log("************update Using bracket notation************")
birds['colour'] = "gray"
console.log(birds)

//add key values in object
console.log("************add Using dot notation****************")
birds.ears = 2
console.log(birds)

console.log("************add Using bracket notation****************")
birds["nose"] = 1
console.log(birds)

//delete key values in object....
console.log("************delete Using dot notation****************")
delete birds.nose
console.log(birds)

console.log("************delete Using bracket notation****************")
delete birds["ears"]
console.log(birds)



