
//object literal
let swapnali={
    firstName:"swapnali",
    lastName:"sardesai",
    age:20,
    rollNo:4,
    displayName:function(){
        console.log(this.firstName +this.lastName)
    }
    
}
swapnali.displayName()

//program2
class person{
    fName 
    lName 
    age
    rollnum

    displayPName(){
        console.log(this.fName+this.lName)
    }
}

let ovi=new person()
console.log(ovi)

ovi.fName="ovi"
ovi.lName="patankar"
ovi.age=23
ovi.rollnum=5
console.log(ovi)
console.log(ovi.rollnum)
ovi.displayPName()


//program3
//constructor
class student{
    constructor(fn,ln,ag,rn){
        this.name=fn
        this.slname=ln
        this.age=ag
        this.roll=rn
    }
    displaySName(){
        console.log(this.name+this.slname)
    }
}

let vidhi=new student("vidhi","patankar",21,6)
console.log(vidhi)
vidhi.displaySName()

//program 4
class fruits{
    setFruitName(fn){
        this.fruitName=fn
    }

    FruitColour(cn){
        this.fruitColour=cn
    }

    setFruitQuantity(fq){
        this.setFruitQuantity=fq
    }
}

let fruit1=new fruits()
console.log(fruit1)
fruit1.setFruitName="apple"
fruit1.FruitColour="red"
fruit1.setFruitQuantity=12
console.log(fruit1)