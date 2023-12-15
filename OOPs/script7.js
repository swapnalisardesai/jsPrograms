
//polymorphism
//overloading is not done in js
class calculator {
    addition(x, y) {
        console.log(x + y)
    }
    addition(x, y, z) {
        console.log(x + y + z)
    }
    addition(x, y, z, a) {
        console.log(x + y + z + a)
    }
}
let objCal = new calculator()
objCal.addition(10, 20)
objCal.addition(12, 13, 12)
objCal.addition(10, 12, 13, 12)

//program2
console.log("****************************************")
class cal {
    add(p,q,r,s)
    {
        if(p!=undefined && q!=undefined && r!=undefined && s!=undefined)
        {
            console.log(p+q+r+s)
        }
        else if(p!=undefined && q!=undefined && r!=undefined)
        {
            console.log(p+q+r)
        }
        else if(p!=undefined && q!=undefined)
        {
            console.log(p+q)
        }
    }


}
let objCal1=new cal
objCal1.add(90,10)
objCal1.add(10,10,10)
objCal1.add(20,20,20,20)


//program3

console.log("****************************************")
class worldBank {
    save() {
        console.log("I am save from worldBank.")
    }
    loan() {
        console.log("I am loan from worldBank")
    }
}
class SBI extends worldBank {
    DisplayBranch() {
        console.log("I am pune branch")
    }
    save() {
        console.log("I am save from SBI")
    }
    loan() {
        console.log("I am loan from SBI")
    }
}
class BOI extends worldBank {
    DisplayBranch() {
        console.log("I Am mumbai branch")
    }
    save() {
        console.log("I am save from BOI")
    }
    loan() {
        console.log("I am loan from BOI")
    }

}

let objSBI = new SBI
objSBI.DisplayBranch()
objSBI.save()
objSBI.loan()

let objBOI = new BOI
objBOI.DisplayBranch()
objBOI.save()
objBOI.loan()