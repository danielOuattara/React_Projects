// function randomIndexer(maxLength, arrayLength) {
//   if (maxLength > arrayLength) return; // check point
//   const randomIndexesList = [];
//   for (let i = 0; i < maxLength; ) {
//     const randomIndex = Math.floor(Math.random() * arrayLength);
//     if (
//       randomIndexesList.length < maxLength &&
//       !randomIndexesList.includes(randomIndex)
//     ) {
//       randomIndexesList.push(randomIndex);
//       i++;
//     }
//   }
//   return randomIndexesList;
// }

// console.log(randomIndexer(3, 6));

//------------------------------------------------------------------------
const allProducts = require("../allProducts");

const getUniqueValues = (arrayDataArg, strTypeArg) => {
  if (strTypeArg === "colors") {
    // return [
    //   "all",
    //   ...new Set([arrayDataArg.map((item) => item[strTypeArg])].flat(2)),
    // ];
    // OR
    // return [
    //   "all",
    //   ...new Set([...arrayDataArg.map((item) => item[strTypeArg])].flat()),
    // ];
  }

  return ["all", ...new Set(arrayDataArg.map((item) => item[strTypeArg]))];
};

console.log(getUniqueValues(allProducts, "category"));
console.log(getUniqueValues(allProducts, "company"));
console.log(getUniqueValues(allProducts, "colors"));
