//find element
let ulEle=document.querySelector('ul')
console.log(ulEle)

let ip=document.querySelector('input[type="text"]')
console.log(ip)

let btn=document.querySelector('button')
console.log(btn)

btn.addEventListener('click',function()
{
    let newIp=ip.value
    addUl=document.createElement('li')
    addUl.textContent=newIp
    ulEle.appendChild(addUl)
    ip.value=""

}

)