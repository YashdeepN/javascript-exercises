function getAge(birthYear, deathYear) {
  if (!deathYear) {
    deathYear = new Date().getFullYear();
  }
  return deathYear - birthYear;
}

const findTheOldest = function (people) {
  const oldest = people.reduce(
    (max, person) =>
      getAge(person.yearOfBirth, person.yearOfDeath) > max
        ? (max = getAge(person.yearOfBirth, person.yearOfDeath))
        : (max = max),
    0
  );
  const oldestPerson = people.filter(
    (person) => getAge(person.yearOfBirth, person.yearOfDeath) === oldest
  )[0];

  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
