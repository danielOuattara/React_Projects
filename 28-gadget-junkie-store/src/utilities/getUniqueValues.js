/*  This function takes 2 arguments: 
    - an array of object 
    - a string
    
    This function filters a copy of the array argument according to 'string' value
    for each object inside the copied array. It then returns this filtered copied array
    
*/

export const getUniqueValues = (arrayDataArg, strTypeArg) => {
  let uniques = arrayDataArg.map((item) => item[strTypeArg]);
  if (strTypeArg === "colors") {
    uniques = uniques.flat();
  }
  return ["all", ...new Set(uniques)];
};
