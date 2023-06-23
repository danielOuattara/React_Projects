/* 
This function takes two argument: 
  - the maxLength of the desired output array
  - the initial length of an input array

This function returns an array of randomly generated indexes
with a maxi size of 'maxLength'

*/

export function randomArrayIndexer(maxLength, arrayLength) {
  const randomIndexesList = [];
  for (let i = 0; i < maxLength; ) {
    const randomIndex = Math.floor(Math.random() * arrayLength);
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
Arguments are: 'arrayArg' and 'maxLengthArg'.

The outer function randomIndexer() takes 'maxLengthArg' and 'arrayArg.length'.

It finally returns an other array made up of random elements of the arrayArg but limited to maxLengthArg
*/

export function featuredProductsRandomizer(arrayArg, maxLengthArg) {
  const randomIndexesList = randomArrayIndexer(maxLengthArg, arrayArg.length);
  const randomFeaturedProducts = arrayArg.filter((item, index) =>
    randomIndexesList.includes(index),
  );
  return randomFeaturedProducts;
}
