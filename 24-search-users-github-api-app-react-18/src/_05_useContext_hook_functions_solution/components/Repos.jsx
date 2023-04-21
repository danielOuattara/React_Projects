import styled from "styled-components";
import { useGitHubContext } from "../context";
import { ExampleChart, Pie3D, Column3D, Bar3D, Doughnut2D } from "./charts";
//---------------------------------------------------

export default function Repos() {
  const { reposList } = useGitHubContext();
  return <h2>repos component</h2>;
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
