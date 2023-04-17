// const paginate = (persons, personsNumberPerPage) => {
//   console.log("personsNumberPerPage -- paginator = ", personsNumberPerPage);
//   const numberOfPages = Math.ceil(persons.length / personsNumberPerPage);
//   const arrayOfPages = Array.from(
//     { length: numberOfPages },
//     (element, index) => {
//       const start = index * personsNumberPerPage;
//       return persons.slice(start, start + personsNumberPerPage);
//     },
//   );

//   return arrayOfPages;
// };

// export default paginate;

//----------------------------------------------------------------

const paginator = (persons, personsNumberPerPage) => {
  const personArrayOfArray = [];
  let i = 0;
  for (; i < persons.length; i += personsNumberPerPage) {
    personArrayOfArray.push(persons.slice(i, i + personsNumberPerPage));
  }
  return personArrayOfArray;
};

export default paginator;
