import React, { useContext } from "react";
import styled from "styled-components";
import { GithubContext } from "../context/context";
import { ExampleChart, Pie3D, Column3D, Bar3D, Doughnut2D } from "./Charts";
const Repos = () => {
  const { repos } = useContext(GithubContext);

  //-----------------------------------------

  /* method 1: constructing an Object, then change it to 
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

  // method 2: constructing directly an Array + sorting + slicing

  let mostUsed = repos.reduce((total, item) => {
    if (!item.language) {
      return total;
    }

    let itemPresent = total.find((obj) => obj.language === item.language);
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

  mostUsed = mostUsed
    .sort((a, b) => {
      return b.starsCount - a.starsCount;
    })
    .slice(0, 5);
  // console.log("mostUsed = ", mostUsed);

  /* Restructuring data for pie3D graph 
  -------------------------------------------------*/
  const pie3DData = mostUsed.map((item) => {
    return {
      label: item.language,
      value: item.languageCount,
    };
  });

  /* Restructuring data for doughnut2d graph 
  -------------------------------------------------*/
  const doughnut2dData = mostUsed.map((item) => {
    return {
      label: item.language,
      value: item.starsCount,
    };
  });

  let mostPopularOrForkedRepo = repos.reduce(
    (total, item) => {
      total.repoByStars.push({
        label: item.name,
        starsCount: item.stargazers_count,
      });
      total.repoByForks.push({
        label: item.name,
        forksCount: item.forks,
      });
      console.log("total = ", total);
      return total;
    },
    {
      repoByStars: [],
      repoByForks: [],
    }
  );

  mostPopularOrForkedRepo.repoByStars = mostPopularOrForkedRepo.repoByStars
    .sort((a, b) => {
      return b.starsCount - a.starsCount;
    })
    .slice(0, 20);

  mostPopularOrForkedRepo.repoByForks = mostPopularOrForkedRepo.repoByForks
    .sort((a, b) => {
      return b.forksCount - a.forksCount;
    })
    .slice(0, 20);

  /* Restructuring data for column3d graph 
  -------------------------------------------------*/
  const column3dData = mostPopularOrForkedRepo.repoByStars.map((item) => {
    return {
      label: item.name,
      value: item.starsCount,
    };
  });

  /* Restructuring data bar3d graph 
  -------------------------------------------------*/

  const bar3dData = mostPopularOrForkedRepo.repoByForks.map((item) => {
    return {
      label: item.name,
      value: item.forksCount,
    };
  });

  // ------------------------------------------

  return (
    <section className="section">
      <Wrapper className="section-center">
        {/* <ExampleChart chartData={chartData} />; */}
        <Pie3D chartData={pie3DData} />
        <Column3D chartData={column3dData} />
        {/* <ExampleChart /> */}
        <Doughnut2D chartData={doughnut2dData} />
        <Bar3D chartData={bar3dData} />
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }

  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;

export default Repos;
