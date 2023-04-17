const paginate = (persons) => {
  const personPerPage = 11;
  const numberOfPages = Math.ceil(persons.length / personPerPage);
  const arrayOfPages = Array.from(
    { length: numberOfPages },
    (element, index) => {
      const start = index * personPerPage;
      return persons.slice(start, start + personPerPage);
    },
  );

  return arrayOfPages;
};

export default paginate;
