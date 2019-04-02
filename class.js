(function(){



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
class Company extends Person{
    constructor(){
        super();
    }
}
var company=new Company();
console.log(company.getFullName());

const x="pavi";
  


var a={
    fame:"pavi",
    lname:".B"
}
var b={
    ...a,
    address:"BTM"

}

console.log(b);
})();