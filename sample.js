let i=10
while(i>=1)
{

    if (i==5)
    {
        i--
        continue
    }
    console.log(i)
    i--
}

/*let b=10
while(b>=1)
{
    if(b==5)
    {
        b--;
        continue;
    }
    console.log(b)
    b--;
}*/

let sum=0
for (let i=1;i<=10;i++)
{
    sum=sum+i
}
console.log(sum)

//square
let sqr
for(let i=1;i<=5;i++)
{
    sqr=i*i
    console.log(`square of ${i} is ${sqr}`)
}
