/* This function take an array of 100 github repos as argument 

It first use reduce() method to gather data in 2 
lists array category: "mostUsedLanguage" & "starsByMostUsedLanguage".

example:
-------- 
mostUsedLanguage = [
  {
    CSS: { label: "CSS", value: 14 },
    Javascript: { label: "JavaScript", value: 78 },
    HTML: { label: "HTML", value: 23 },
  },
];

It finally convert each object in each category and order data 
in each list according to count value and slice them to a limited 
number before return them.

example:
--------
mostUsedLanguage = [
  { label: "CSS", value: 14 },
  { label: "JavaScript", value: 78 },
  { label: "HTML", value: 23 },
];
------------------------------------------------------------*/

export default function pie3DUtilityV2(repos) {
  // gather data in 2 lists array: mostUsedLanguage & starsByMostUsedLanguage.
  let { mostUsedLanguage, starsByMostUsedLanguage } = repos.reduce(
    (total, item) => {
      if (!item.language) {
        return total;
      } else if (Object.keys(total.mostUsedLanguage).includes(item.language)) {
        total.mostUsedLanguage[item.language].value += 1;
        total.starsByMostUsedLanguage[item.language].value +=
          item.stargazers_count;
      } else {
        total.mostUsedLanguage[item.language] = {
          label: item.language,
          value: 1,
        };
        total.starsByMostUsedLanguage[item.language] = {
          label: item.language,
          value: item.stargazers_count,
        };
      }
      return total;
    },
    { mostUsedLanguage: [], starsByMostUsedLanguage: [] },
  );

  // ordering and slicing function
  const orderAndSlicer = (arrayArg, sliceArgument) => {
    return Object.values(arrayArg)
      .sort((a, b) => {
        return b.value - a.value;
      })
      .slice(0, sliceArgument);
  };

  mostUsedLanguage = orderAndSlicer(mostUsedLanguage, 7);
  starsByMostUsedLanguage = orderAndSlicer(starsByMostUsedLanguage, 7);

  return {
    mostUsedLanguage,
    starsByMostUsedLanguage,
  };
}
