//program3
//inheritance
//single inheritence
class student {
    firstName = "ram"
    lastName = "desai"
    adharNo = 123345
    displayName() {
        console.log(this.firstName + this.lastName)
    }

}

class teacher extends student {
    salary = 50000
    displaySalary() {
        console.log(this.salary)
    }
}
let t1 = new teacher()
console.log(t1.firstName)
console.log(t1.lastName)
t1.displayName()
t1.displaySalary()

//program2
//using constructor
class employee {
    constructor(en, ea, ec) {
        this.ename = en
        this.eAddress = ea
        this.eContact = ec
    }
}

class desig extends employee{
    designation='manager'
    salary=11110
    displayDesig(){
        console.log(this.designation)
    }
}

let objD=new desig("umesh patankar","pune",1234567890)
console.log(objD.ename)
console.log(objD.designation)
console.log(objD.salary)
objD.displayDesig()
