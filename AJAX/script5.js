//by calling api directly
let btn = document.querySelector('button')

function getUsers(pageno) {
    return fetch(`https://reqres.in/api/users?page=${pageno}`)
        .then(function (response) {
            return response.json()
        })
        .then(function (response) {
            console.log(response.data)
            response.data.forEach(function (el) {
                document.write(`<h2>${el.id}</h2>`)
                document.write(`<h2>${el.first_name}${el.last_name}</h2>`)
                document.write(`<h3>${el.email}</h3>`)
                document.write(`<img src=${el.avtar}`)
            })
        })
}
btn.addEventListener('click',function(){
    getUsers(2)
}
)