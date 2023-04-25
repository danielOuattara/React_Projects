/* 
method 1: 
constructing a Data Object of objects, then change it to 
an Array + sorting + slicing. No 'stargazers_count       */

export default function pie3DUtilityV2(repos) {
  // gathering infos about language in repos
  let mostUsed = repos.reduce((total, item) => {
    if (!item.language) {
      return total;
    } else if (Object.keys(total).includes(item.language)) {
      total[item.language].value += 1;
    } else {
      total[item.language] = { label: item.language, value: 1 };
    }
    return total;
  }, {});

  const pie3DData = Object.values(mostUsed)
    .sort((a, b) => {
      return b.value - a.value;
    })
    .slice(0, 5);

  console.log("pie3DData = ", pie3DData);
  return pie3DData;
}
