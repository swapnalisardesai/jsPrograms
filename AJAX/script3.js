function createuser(){
    new Promise(function(resolve,reject){
        setTimeout(function(){
        resolve("user created")},3000)
    })
}

function getId(){
    new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("getId")
        },2000)
    })
}

function getInfo(){
    new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("getInfo")
        },4000)
    })
}

async function getusers(){
    let a1=await createuser()
    console.log(a1)
    let a2=await getId()
    console.log(a2)
    let a3=await getInfo()
    console.log(a3)
}
getusers()