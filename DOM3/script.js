//<h1 id="one" class="classOne" name="abc"> swapnali</h1>
//id
let byId=document.querySelector('#one')
console.log(byId)

//byClassName
let byClassName=document.querySelector('.classOne')
console.log(byClassName)

//byTagName
let byTagName=document.querySelector('h1')
console.log(byTagName)

//byAttribute
//tagName[attribute="value"]

let byAttribute=document.querySelector("h1[name=abc]")
console.log(byAttribute)
