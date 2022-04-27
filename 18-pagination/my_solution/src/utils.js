// const paginate = (persons, personsPerPage = 8) => {
//   const numberOfPages = Math.ceil(persons.length / personsPerPage);
//   const pages = Array.from({ length: numberOfPages }, (element, index) => {
//     const start = index * personsPerPage;
//     return persons.slice(start, start + personsPerPage);
//   });
//   return pages;
// };

// export default paginate;

//---------------------------------------------------------

const paginate = (persons, personsPerPage) => {
  let pages = [];
  for (let i = 0; i < persons.length; i += personsPerPage) {
    pages.push(persons.slice(i, i + personsPerPage));
  }
  return pages;
};

export default paginate;
