/* 
This function takes one argument: the maxLength of the output array
This function return an array of randomly generated indexes. */

function randomIndexer(maxLength) {
  const randomIndexesList = [];
  for (let i = 0; i < maxLength; ) {
    const randomIndex = Math.floor(Math.random() * 6);
    if (
      randomIndexesList.length < maxLength &&
      !randomIndexesList.includes(randomIndex)
    ) {
      randomIndexesList.push(randomIndex);
      i++;
    }
  }
  return randomIndexesList;
}

//----------------------------------------------------

/* 
This function take 2 arguments and call 1 outer function (above one) 
It takes a maxLengthArg and call randomIndexer using this maxLengthArg
It also takes an arrayArg and returns an other array made up of random
elements of the arrayArg but limited to maxLengthArg
*/

export function featuredProductsRandomizer(arrayArg, maxLengthArg = 3) {
  const randomIndexesList = randomIndexer(maxLengthArg);
  const randomFeaturedProducts = arrayArg.filter((item, index) =>
    randomIndexesList.includes(index),
  );
  return randomFeaturedProducts;
}
