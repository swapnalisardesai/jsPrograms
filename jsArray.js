let names = ["swapnali", "ovi", "vidhi"]
//index of array always starts from zero
let a = names.length
console.log(a)//length gives number of elements in array
// length-1 is always last index
console.log(names[0])
console.log(names[1])
console.log(names[2])
console.log("***************************************")

//program to print elements of array using for loop
for (let i = 0; i < names.length; i++) {
    console.log(names[i])
}

//program to print elements of array in reverse.
console.log("***************************************")
for (let i = names.length - 1; i >= 0; i--) {
    console.log(names[i])
}

//program to print marks using while loop.
console.log("***************************************")
let marks = [76, 89, 66, 81, 98, 71]
let i = 0
console.log("marks of student")
while (i < marks.length) {
    console.log(marks[i])
    i++
}

//methods in array
//1 push()
//action=>add element at last
//return=>new length of array//number
console.log("**********************push********************")
let score = [100, 67, 89, 99]
let a1 = score.push(500, 300)
console.log(a1)
console.log(score)
console.log("length of array is:", score.length)

//2 unshift()
//action=>add element at first
//return=>new length of array//number
console.log("**********************unshift********************")
let m1 = [10, 20, 30, 40, 50]
let b1 = m1.unshift(5)
console.log(b1)
console.log("elements of array:", m1)
console.log("new length of array is:", m1.length)

//3 pop()
//action=>remove last element of array
//return=>new length of array// number and returns the same element
console.log("**********************pop********************")
let arr = [100, 200, 300, 400, 500]
let p = arr.pop()
console.log("deleted element is " + p)
console.log(arr.length)


//4 shift()
//action=>remove first element of array
//returns the same element
console.log("*************shift method************************")
let s = ["abc", "pqr", "xyz", "lmn"]
let p1 = s.shift()
console.log(p1)
console.log(s)

//5 reverse()
//action=>reverse the elements in array
//returns=>array
console.log("**********************reverse********************")
let r = ["apple", "chikoo", "papaya", "kiwi"]
let k = r.reverse()
console.log(k)

//6 indexOf()
//action=>gives the index of given array element.
//return=> number ,gives-1 if it is not present
console.log("**********************indexOf********************")
let arr1 = ["sparrow", "pigon", "crow", "parrot"]
let q = arr1.indexOf("parrot")
let r1 = arr1.indexOf("sss")
console.log(q)
console.log(r1)
console.log(arr1[q])
console.log(arr1[r1])

//7 sort()
//action=>sort the array alphabetically
//return=>array
console.log("**********************sort********************")
let sortArr = ["lion", "tiger", "elephant", "deer"]
let sortArr1 = [45, 78, 23, 12]
console.log(sortArr.sort())
console.log(sortArr1.sort())

//8 flat()
//action=>all sub array elements concatenated in single array
//returns=>new array
console.log("**********************flat********************")
let flatArr = [
    ["a1", "a2", "a3", "a4"],
    ["b1", "b2", "b3", "b4"],
    ["c1", "c2", "c3", "c4"]
]
console.log(flatArr[0][0])
console.log(flatArr[1][3])
let v1 = flatArr.flat()
console.log(v1)

//9 at()
//action=>it gives the value of given index
//return=>array element
console.log("**********************at********************")
//            0   1  2    3  4
let atArr = [99, 88, 77, 66, 55]
//           -5  -4  -3  -2  -1
let n = atArr.at(1)
let h = atArr.at(-1)
console.log(n)
console.log(h)

//10 fill()
//action=>changes array elements from given index
//return=modified array
console.log("**********************fill********************")
//               0   1   2     3    4
let fillArr = [100, 200, 300, 400, 500]
let v = fillArr.fill(undefined, 2, 4)
console.log(v)

//11 includes()
//action=>checks the element is present or not
//return=>boolean value
console.log("**********************includes********************")
let newArr = ["ovi", "vidhi", "swara"]
console.log(newArr.includes("ovi"))
console.log(newArr.includes("riya"))

//12 concat()
//action=>combines two or more arrays
//return=>new array without modifing array elements
console.log("**********************concat********************")
let arr2 = ["a", "b", "c", "d"]
let arr3 = [1, 2, 3, 4]
let arr4 = ['e', 'f', 'g', 'h']
let arr5 = arr2.concat(arr3)
let arr6 = arr2.concat(arr3).concat(arr4)
console.log(arr5)
console.log(arr6)

//13 join()
//action=>join the elements of array using the given seperator value
//return=>array elements with seperator
console.log("**********************join********************")
let info = ["swapnali", "patankar", 9988776655]
console.log(info.join('-'))

//14 map()
//action=>calls call back function on each element of array.
//return=>new array
console.log("**********************map********************")
let birthYear = [1990, 1991, 1992, 1993, 1994]
let age = birthYear.map(function (el, index, arr) {
    return 2023 - el
})
console.log(age)

//program 2
let numbers = [1, 2, 3, 4, 5, 6]
let newNumbers = numbers.map(function (el, index, arr) {
    return el * 10
})
console.log(newNumbers)
console.log(numbers)

//program 3
let price = [590, 990, 765, 342, 564]
let discPrice = price.map(function (el, inedx, arr) {
    return el * 0.1
})
console.log(discPrice)
console.log("10% discount amount " + discPrice)

//15 filter()
//action=>it gives elements of array when certain condition is satisfied
//return=>elements of array
console.log("**********************filter********************")
let num = [23, 56, 78, 12, 34]
let above30 = num.filter(function (el, index, arr) {
    return el > 30
})
console.log(above30)


//16 reduce()
//action=>perform action on array elements
//return=>single value
console.log("**********************reduce********************")
let values = [11, 22, 33, 44]
let sum = values.reduce(function (acc, el, index, arr) {
    return acc + el
}, 0)
console.log(sum)

//17 forEach()
//action=>perform specified action on each element of array
//return=>
console.log("**********************forEach********************")
let cities = ["pune", "delhi", "mumbai"]
//let n1=[1,2,3]
cities.forEach(function (el, index, arr) {
    console.log("welcome ", el)
    //  console.log(el+1)

})

let bYear = [1990, 1991, 1992, 1993, 1994]
let m = bYear.forEach(function (el, index, arr) {
    console.log(2023 - el)
})
//console.log(m)

//18 find()
//action=>if condition true it finds the first occarance element of array
//return=>array element
console.log("*********************find*********************")
let findArr = [7, 8, 9, 10]
let s1 = findArr.find(function (el, index, arr) {
    return el >8
})
console.log(s1)

//19 findIndex()

console.log("*********************findIndex*********************")
let findIndArr = [7, 8, 9, 10]
let s2 = findIndArr.findIndex(function (el, index, arr) {
    return el >8
})
console.log(s2)