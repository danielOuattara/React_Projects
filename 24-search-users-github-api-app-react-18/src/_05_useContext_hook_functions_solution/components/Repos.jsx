import styled from "styled-components";
import { useGitHubContext } from "../context";
import { Pie3D, Column3D, Bar3D, Doughnut2D } from "./charts";
import {
  pie3dDoughnutDataUtility,
  column3dBar3dDataUtility,
} from "../utilities";
//---------------------------------------------------

export default function Repos() {
  const { reposList } = useGitHubContext();

  const {
    mostUsedLanguage: pie3dData,
    starsByMostUsedLanguage: doughnut3dData,
  } = pie3dDoughnutDataUtility(reposList);
  const { repoByStars: column3dData, repoByForks: bar3dData } =
    column3dBar3dDataUtility(reposList);

  return (
    <section className="section">
      <Wrapper className="section-center">
        <Pie3D chartData={pie3dData} />
        <Column3D chartData={column3dData} />
        <Doughnut2D chartData={doughnut3dData} />
        <Bar3D chartData={bar3dData} />
      </Wrapper>
    </section>
  );
}

//---------------------------------------------------
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
