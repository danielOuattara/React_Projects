import { useState } from "react";
import { AreaChart, BarChart } from "./index";
import { ChartsContainerWrapper } from "../../assets/styles";
import { useSelector } from "react-redux";

export default function ChartsContainer() {
  const [shoWBarChart, setShowBarChart] = useState(true);
  const { monthlyApplications: data } = useSelector(
    (store) => store.allJobsState,
  );

  return (
    <ChartsContainerWrapper>
      <h4>Monthly Applications</h4>
      <button type="button" onClick={() => setShowBarChart(!shoWBarChart)}>
        {shoWBarChart ? "Show Area Chart" : "Show Bar Chart"}
      </button>
      {shoWBarChart ? <BarChart data={data} /> : <AreaChart data={data} />}
    </ChartsContainerWrapper>
  );
}
