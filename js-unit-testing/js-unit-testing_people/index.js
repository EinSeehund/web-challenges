export function getFirstNames(people) {
  return people.map((person) => person.firstName);
}

export function getFullNames(people) {
  return people.map((person) => `${person.firstName} ${person.lastName}`);
}

export function getNameAndAge(people) {
  return people.map((person) => `${person.lastName} (${person.age})`);
}

export function getPeopleByAge(people, age) {
  return people.filter((person) => person.age === age);
}

export function getPeopleNamesOlderThan(people, age) {
  const resultArray = [];
  people.forEach(
    (person) =>
      person.age > age &&
      resultArray.push(`${person.firstName} ${person.lastName}`)
  );
  return resultArray;
}

export function getPeopleByLastName(people, lastName) {
  return people.filter((person) => person.lastName === lastName);
}

export function findPersonById(people, id) {
  return people.find((person) => person.id === id);
}

export function isAnyoneOlderThan(people, age) {
  return people.some((person) => person.age > age);
}

export function getLastNamesSortedByAge(people) {
  const sortedArray = people.toSorted(
    (person1, person2) => person1.age - person2.age
  );
  return sortedArray.map((person) => person.lastName);
}
