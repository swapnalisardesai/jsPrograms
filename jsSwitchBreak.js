//switch without break..
let city1="pune"
switch(city1)
{
    case 'jaipur':
        console.log("RJ")
    case 'pune':
        console.log("MH")
    case 'indore':
        console.log("MP")
    default:
        console.log("invalid city")
}

//switch with break...
let city="pune"
switch(city)
{
    case 'jaipur':
        console.log("RJ")
        break
    
    case 'pune':
        console.log("MH")
        break

    case 'indore':
        console.log("MP")
        break

    case 'lucknow':
        console.log("UP")
        break

    default:
        console.log("no city found")

}
//switch with multiple cases.....
let city3="belgavi"
switch(city3)
{
    case 'pune':
    case 'nagpur':
        console.log("MH")
        break
    case "banglore":
    case "belgavi":
        console.log("KA")
        break
    default:
        console.log("incorrect city name")
}

//comparing numbers using switch....

let a=10
let b=20
let c=30

let isBiggest=true
switch(isBiggest)
{
    case a>b && a>c:
        console.log("a is greater")
        break
    case b>a && b>c:
        console.log("b is greater")
        break
    default:
        console.log("c is greater")
}

