// person constructor

function Person(name, dob){
  this.name = name;
  //this.age = age;
  this.birthday = new Date(dob);
  this.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}

// const bob = new Person('bob', 36);
// const john = new Person('john', 30);

// console.log(john.age);

const brad = new Person('Brad', '9-10-1981');
console.log(brad.calculateAge());










