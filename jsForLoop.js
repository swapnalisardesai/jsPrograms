//*****************print 1 to numbers***************

for(let i=1;i<=5;i++)
{
    console.log(i)
}
console.log("**********")
//******************print 5 to 1******************

for (let i=5;i>=1; i--)
{
    console.log(i)
}
console.log("**********")
//**************table of 2************************
for (let i=2;i<=20;i=i+2)
{
    console.log(i)
}
console.log("**********")
//*******************for loop with break**************

for(let i=1;i<=5;i++)
{
    if(i==4)
    {
        break;
    }
    console.log(i)

}
console.log("**********")
//***********************for loop with continue*************

for(let i=1;i<=5;i++)
{
    if(i==3)
    {
        continue;
    }
    console.log(i)
}