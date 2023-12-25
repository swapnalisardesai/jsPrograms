//multilevel inheritance

class grandFather{
    constructor(fn,ln,){
        this.GfirstName=fn
        this.lastName=ln
    }

    displayGname()
    {
        console.log(this.GfirstName+this.lastName)
    }
}

class father extends grandFather{
    constructor(fn,ln,ffn){
        super(fn,ln)
        this.fatherName=ffn
    }
    displayFatherName()
    {
        console.log(this.fatherName+this.lastName)
    }
}

class son extends father{
    constructor(fn,ln,ffn,sn)
    {
        super(fn,ln,ffn)
        this.sName=sn
    }
    displaySName()
    {
        console.log(this.sName+this.lastName)
    }

}

let objSon=new son("ram","desai","mahesh","sahil")
console.log(objSon.GfirstName)
objSon.displayFatherName()
objSon.displayGname()
objSon.displaySName()