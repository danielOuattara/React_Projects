import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

export default function Bar3D(props) {
  const chartConfigs = {
    type: "bar3d",
    width: "100%",
    height: "400",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Most Forked Repo by forks",
        XAxisName: "Repos",
        XAxisNameFontSize: "16px",
        yAxisName: "Forks",
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
