const personPrototypes = {
    greeting: function() {
      return `Hello there ${this.firstName} ${this.lastName}`;
    },
    getsMarried: function(newLastName) {
      this.lastName = newLastName;
    }
  }
  
  const mary = Object.create(personPrototypes);
  mary.firstName = 'Mary';
  mary.lastName = 'Williams';
  mary.age = 30;
  
  mary.getsMarried('Thompson');
  
  console.log(mary.greeting());
  
  const brad = Object.create(personPrototypes, {
    firstName: {value: 'Ferran'},
    lastName: {value: 'Arnoldus'},
    age: {value: 30}
  });
  
  console.log(ferran);
  
  console.log(ferran.greeting());