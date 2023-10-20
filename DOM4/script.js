let eleH1 = document.querySelector('#one')
console.log(eleH1)

let eleIp = document.querySelector('input[type="text"]')
console.log(eleIp)

let btn = document.querySelector('.btn')
console.log(btn)

btn.addEventListener('click', function () {
    let ipValue = eleIp.value
    eleH1.textContent = ipValue
    eleH1.style.color = ipValue
    eleIp.value = ""
})