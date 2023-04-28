import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

export default function Pie3D(props) {
  const chartConfigs = {
    type: "pie3d",
    width: "100%",
    height: "400",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Languages",
        theme: "fusion",
        decimals: 0,
        pieRadius: "45%",
      },
    },
  };

  const finalChartConfigs = {
    ...chartConfigs,
    dataSource: {
      ...chartConfigs.dataSource,
      data: props.chartData,
    },
  };

  return <ReactFC {...finalChartConfigs} />;
}

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);
