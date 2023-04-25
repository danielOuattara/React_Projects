import styled from "styled-components";
import { useGitHubContext } from "../context";
import { Pie3D, Column3D, Bar3D, Doughnut2D } from "./charts";
import { pie3DUtilityV2 } from "../utilities";
//---------------------------------------------------

export default function Repos() {
  const { reposList } = useGitHubContext();

  return (
    <section className="section">
      <Wrapper className="section-center">
        <Pie3D chartData={pie3DUtilityV2(reposList)} />
        <Doughnut2D chartData={pie3DUtilityV2(reposList)} />
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
