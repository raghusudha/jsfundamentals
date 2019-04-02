(function(){


//class
class Person{
    constructor(){
    this.username="sudha";
    this.firstname="rani";
    this.lastname=".B";

    }
    getFullName(){
        return this.username+this.firstname+this.lastname;
    
    }
    
}

// Extend classes

class Company extends Person{
    constructor(){
        super();
    }
}
var company=new Company();
console.log(company.getFullName());
 //const variable
const x="pavi";
  
// object extends object using spread

var a={
    fame:"pavi",
    lname:".B"
}
var b={
    ...a,
    address:"BTM"

}
console.log(b);
///assigning
var a=[10,20];
var b=a;
a=[30,40];
console.log(""+a+ "/ " +b);
///objects or arrays

var a={name:"swathi"}
var b=a;
b.name="sudha",
a.name="pavi",
console.log(""+a.name+ "/ " +b.name);



})();