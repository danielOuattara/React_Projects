const paginate = (data) => {
  const followersPerPage = 8; // hard coded, can be set from user input
  const numberOfPages = Math.ceil(data.length / followersPerPage);

  const pages = Array.from({ length: numberOfPages }, (element, index) => {
    const start = index * followersPerPage;
    return data.slice(start, start + followersPerPage);
  });
  console.log(pages);
  return pages;
};

export default paginate;
