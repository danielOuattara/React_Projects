/*  John's method (optimized by me !):  
  --------------------------------------------------*/
export default function pie3DUtilityV1(repos) {
  let mostUsed = repos.reduce((total, item) => {
    if (!item.language) {
      return total;
    }
    if (!total[item.language]) {
      total[item.language] = { label: item.language, value: 1 };
    } else {
      total[item.language].value += 1;
    }
    return total;
  }, {});

  const pie3DData = Object.values(mostUsed)
    .sort((a, b) => {
      return b.language - a.language;
    })
    .slice(0, 5);

  return pie3DData;
}
