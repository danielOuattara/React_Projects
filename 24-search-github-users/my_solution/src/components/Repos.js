import React, { useContext } from "react";
import styled from "styled-components";
import { GithubContext } from "../context/context";
import { ExampleChart, Pie3D, Column3D, Bar3D, Doughnut2D } from "./Charts";
import { ReposWrapper } from "./Wrappers";

const Repos = () => {
  const { repos } = useContext(GithubContext);

  /* Building data for mostUsed
  ============================== */

  /* method 1: constructing a Data Object of objects, then change it to 
               an Array + sorting + slicing. No 'stargazers_count */

  // let mostUsed = repos.reduce((total, item) => {
  //   if (!item.language) {
  //     return total;
  //   } else if (Object.keys(total).includes(item.language)) {
  //     total[item.language].languageCount += 1;
  //   } else {
  //     total[item.language] = { label: item.language, languageCount: 1 };
  //   }
  //   return total;
  // }, {});

  // mostUsed = Object.values(mostUsed)
  //   .sort((a, b) => {
  //     return b.languageCount - a.languageCount;
  //   })
  //   .slice(0, 5);

  //-----------------------------------------

  // method 2: constructing (data) directly an Array of object

  let mostUsed = repos.reduce((total, item) => {
    if (!item.language) {
      return total;
    }

    let itemPresent = total.find((element) => element.language === item.language);
    if (itemPresent) {
      itemPresent.languageCount += 1;
      itemPresent.starsCount += item.stargazers_count;
    } else {
      total.push({
        language: item.language,
        languageCount: 1,
        starsCount: item.stargazers_count,
      });
    }
    return total;
  }, []);

  /* Restructuring data for pie3D & doughnut2d graph 
  ---------------------------------------------------*/

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

  const doughnut2dData = mostUsed.map((item) => {
    return {
      label: item.language,
      value: item.starsCount,
    };
  });

  /* Building data for mostPopularOrForkedRepo
  ============================================== */

  // method 2:
  let { repoByStars, repoByForks } = repos.reduce(
    (total, item) => {
      total.repoByStars.push({
        label: item.name,
        value: item.stargazers_count,
      });
      total.repoByForks.push({
        label: item.name,
        value: item.forks,
      });
      return total;
    },
    {
      repoByStars: [],
      repoByForks: [],
    }
  );

  /* Restructuring data for column3d & bar3d graph 
  -------------------------------------------------*/
  repoByStars = repoByStars
    .sort((a, b) => {
      return b.value - a.value;
    })
    .slice(0, 10);

  repoByForks = repoByForks
    .sort((a, b) => {
      return b.value - a.value;
    })
    .slice(0, 10);

  const column3dData = repoByStars;
  const bar3dData = repoByForks;

  // ------------------------------------------

  return (
    <section className="section">
      <ReposWrapper className="section-center">
        {/* <ExampleChart chartData={chartData} />; */}
        <Pie3D chartData={pie3DData} />
        <Column3D chartData={column3dData} />
        {/* <ExampleChart /> */}
        <Doughnut2D chartData={doughnut2dData} />
        <Bar3D chartData={bar3dData} />
      </ReposWrapper>
    </section>
  );
};

export default Repos;
