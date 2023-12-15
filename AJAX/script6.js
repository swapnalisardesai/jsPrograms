function getUserId(pageNo){
    return fetch (`https://reqres.in/api/users?page=${pageNo}`)
    .then(function(response){
        return response.json
    })
    .then(function(response){
        return response.data

    })
}
//getUserId(2)

function getSingleUser(id){
return    fetch(`https://reqres.in/api/users/${id}`)
    .then(function(response){
        return response.json
    })
    .then(function(response){
//        console.log(response.data)
        return response.data
    })
}

function renderHtml(el){
document.write(`<h1>${el.id}</h1>`)
document.write(`<h1>${el.first_name}</h1>`)
document.write(`<h1>${el.email}</h1>`)
document.write(`<img src=${el.avatar}`)
}

async function getUserInfo(pageNo){
    let arr=await getUserId(pageNo)
    let user=await getSingleUser(arr[1].id)
    renderHtml(user)
}
getUserInfo(2)