function randomIndexer(maxLength, arrayLength) {
  if (maxLength > arrayLength) return; // check point
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

console.log(randomIndexer(3, 6));
