//****************print 1 t0 5 numbers**************

let i=1
while(i<=5)
{
    console.log(i)
    i++;
}

//**********************print 5 to 1*****************

let p=5
while(p>=1)
{
    console.log(p)
    p--;
}

//*******************while loop with break**************

let a=1
while(a<=5)
{
    if (a==3)
    {
        break;
    }
    console.log(a)
    a++;
}


//*********************while loop with continue*************

let b=1
while(b<=10)
{
    if(b==5)
    {
        b++;
        continue;
    }
    console.log(b)
    b++;
}