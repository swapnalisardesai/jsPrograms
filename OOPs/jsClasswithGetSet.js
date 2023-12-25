//set get keyword
class person {
    set firstName(fn) {
        this.first_Name = fn
    }
    get firstName() {
        return this.first_Name
    }

    set lastName(ln) {
        this.last_Name = ln
    }
    get lastName() {
        return this.last_Name
    }
    set rollNo(rn) {
        this.roll_No = rn
    }
    get rollNo() {
        return this.roll_No
    }

    displayName()
    {
        console.log(this.firstName+this.lastName)
    }

}

let sameer=new person()
console.log(sameer)

sameer.firstName="sameer"
sameer.lastName="patankar"
sameer.rollNo=2

console.log(sameer)

console.log(sameer.fName)