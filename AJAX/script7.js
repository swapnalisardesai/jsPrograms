function fetchUser(id){
    return fetch(`https://reqres.in/api/users/${id}`)
    .then(function(response){
        return response.json
    })
    .then(function(response){
        return response.data
    })
 }
// fetchUser(3)

// function getUser2(){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             let a=10
//             let b=20
//             if(a==b)
//             {
//                 resolve("hello")
//             }
//             else{
//                 reject("bye")
//             }
//         },1000)
//     })
// }

Promise.all([fetchUser(1),
fetchUser(2),
fetchUser(3)])
.then(function(response){
    console.log(response)
})


// //Promise.allSettled()
// Promise.allSettled([fetchUser(1),
//     fetchUser(2),
//     fetchUser(3),getUser2()])
//     .then(function(response){
//         console.log(response)
//     })

//     //promise.race()
//     Promise.race([fetchUser(1),
//         fetchUser(2),
//         fetchUser(2),getUser2()])
//         .then(function(response){
//             console.log(response)
//         })