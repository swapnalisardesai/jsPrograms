//let bodyEle=document.querySelector('body')
//console.log(bodyEle)

let ulList=document.querySelector('ul')
console.log(ulList)

let inputText=document.querySelector('input')
console.log(inputText)

let btnAdd=document.querySelector('#btnAdd')

btnAdd.addEventListener('click',function(){
    let txt=inputText.value
    if(txt!=""){
    let newE=document.createElement('li')
    newE.textContent=txt
    createButtons(newE)
    ulList.appendChild(newE)
    inputText.value=""
    }
    else{
        console.log("enter fruit name")
    }
})

function createButtons(li){
    let r=document.createElement('button')
    r.textContent='Remove'
    r.classList.add('remove')
    li.appendChild(r)

    let u=document.createElement('button')
    u.textContent='Up'
    u.classList.add('up')
    li.appendChild(u)

    let d=document.createElement('button')
    d.textContent='down'
    d.classList.add('down')
    li.appendChild(d)
}


  ulList.addEventListener('click',function(event)  {
if(event.target.tagName=="BUTTON"){
    if(event.target.ClassName=="remove"){
        let li=event.target.parentElement
        let ul=li.parentElement
        ul.removeChild(li)
    }
    else if(event.target.class="up"){
        let liEle=event.target.parentElement
        let prevLi=liEle.previousElementSibling
        let ulList=liEle.parentElement
        if (prevLi){
            ulList.insertBefore(liEle,prevLi)
        }
    }
    else if(event.target.ClassName="down")
    {
        let liEle=event.target.parentElement
        let nextLi=liEle.nextElementSibling
        let ulList=liEle.parentElement
        if(nextLi)
        {
            ulList.insertBefore(nextLi,liEle)
        }
    }
}
  }

  )