/*
const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
       },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    }
  ]
*/

  const currentYear = new Date().getFullYear();
people.forEach(person => {
    person.age = function() {
        return (this.yearOfDeath || this.currentYear) - this.yearOfBirth;
    }
});
/*
people.forEach(person => {
    console.log(`${person.name}'s age is: ${person.age()}`);
});*/
function findTheOldest(peopleArray) {
let oldestPerson = people[0];
people.forEach(person => {
    if (person.age() > oldestPerson.age()){
        oldestPerson = person; 
    }
})
 return oldestPerson
}
;
console.log(findTheOldest(people.name));

// Do not edit below this line
module.exports = findTheOldest;
