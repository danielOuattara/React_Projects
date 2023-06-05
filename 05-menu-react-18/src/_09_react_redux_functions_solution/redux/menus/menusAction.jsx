const SELECT_CATEGORY = "SELECT_CATEGORY";

const selectCategory = (newCategory) => {
  return { type: SELECT_CATEGORY, payload: { newCategory } };
};

export { SELECT_CATEGORY, selectCategory };
