/* 
method 2: constructing (data) directly an Array of object */

export default function pie3DUtilityV3(repos) {
  // gathering infos about language in repos
  let mostUsed = repos.reduce((total, item) => {
    if (!item.language) {
      return total;
    }

    let itemIsPresent = total.find(
      (element) => element.language === item.language,
    );

    if (itemIsPresent) {
      itemIsPresent.languageCount += 1;
      itemIsPresent.starsCount += item.stargazers_count;
    } else {
      total.push({
        language: item.language,
        languageCount: 1,
        starsCount: item.stargazers_count,
      });
    }
    return total;
  }, []);

  //Restructuring data for pie3D
  mostUsed = mostUsed
    .sort((a, b) => {
      return b.starsCount - a.starsCount;
    })
    .slice(0, 5);

  const pie3DData = mostUsed.map((item) => {
    return {
      label: item.language,
      value: item.languageCount,
    };
  });

  return pie3DData;
}
