//constructor in child and parent class

class teacher{
    constructor(fn,ln,sa){
        this.fName=fn
        this.lastName=ln
        this.salary=sa 

    }
    displayName()
    {
        console.log(this.fName+this.lastName)
    }
}


class professor extends teacher{
    constructor(fn,ln,sa,spe){
        super(fn,ln,sa)
        this.specialisation=spe
    }

    displaySpec()
    {
        console.log(this.specialisation)
    }
}

let objP=new professor("sara","desai",40000,"eng")
console.log(objP)

objP.displaySpec()
console.log(objP.lastName)