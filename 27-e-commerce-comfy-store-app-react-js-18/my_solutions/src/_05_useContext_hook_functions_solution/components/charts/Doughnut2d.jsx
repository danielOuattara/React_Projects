import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.candy";

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const chartConfigs = {
  type: "doughnut2d",
  width: "100%",
  height: "400",
  dataFormat: "json",
  dataSource: {
    chart: {
      caption: "Stars Per Language",
      doughnutRadius: "45%",
      decimals: 0,
      showPercentValues: 0,
      theme: "candy",
    },
  },
};

export default function Doughnut3D(props) {
  const finalChartConfigs = {
    ...chartConfigs,
    dataSource: {
      ...chartConfigs.dataSource,
      data: props.chartData,
    },
  };

  return <ReactFC {...finalChartConfigs} />;
}
