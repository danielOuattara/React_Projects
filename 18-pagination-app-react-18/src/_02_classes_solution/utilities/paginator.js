/*
This function take 2 parameters: an array persons of object and an integer
This function return an array of array of persons object. 
Each sub array contain at max the initial integer number of element.
*/

const paginator = (persons, personsNumberPerPage) => {
  const personArrayOfArray = [];
  let i = 0;
  for (; i < persons.length; i += personsNumberPerPage) {
    personArrayOfArray.push(persons.slice(i, i + personsNumberPerPage));
  }
  return personArrayOfArray;
};

export default paginator;
