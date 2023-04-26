/*  John's method (optimized by me !):  
  --------------------------------------------------*/
export function pie3DUtilityV1(repos) {
  let mostUsed = repos.reduce((total, item) => {
    if (!item.language) {
      return total;
    }
    if (!total[item.language]) {
      total[item.language] = {
        label: item.language,
        value: 1,
        stars: item.stargazers_count,
      };
    } else {
      total[item.language].value += 1;
      total[item.language].stars += item.stargazers_count;
    }
    return total;
  }, {});

  const pie3DData = Object.values(mostUsed)
    .sort((a, b) => {
      return b.language - a.language;
    })
    .slice(0, 5);
  console.log("pie3DData = ", pie3DData);

  return pie3DData;
}

//-------------------------------------------------------------

// /*
// method 1:
// constructing a Data Object of objects, then change it to
// an Array + sorting + slicing. No 'stargazers_count       */

export function pie3DUtilityV2(repos) {
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

//-------------------------------------------------------------------

/* 
method 2: constructing (data) directly an Array of object */

export function pie3DUtilityV3(repos) {
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
