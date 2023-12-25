class mother{
    constructor(fn,ln)
    {
        this.Mname=fn
        this.lastName=ln
    }
displayName()
{
    console.log(this.Mname+this.lastName)
}
}

class son extends mother{
    constructor(fn,ln,sn)
    {
        super(fn,ln)
        this.sName=sn
    }
    displaySName()
    {
        console.log(this.sName+this.lastName)
    }
}

class daughter extends mother{
    constructor(fn,ln,dn){
        super(fn,ln)
        this.dName=dn 
    }
    displayDName()
    {
        console.log(this.dName+this.lastName)
    }
}

let objD=new daughter("lalita","sardesai","swapnali")
objD.displayDName()

let objS=new son("lalita","sardesai","swapnil")
objS.displaySName()