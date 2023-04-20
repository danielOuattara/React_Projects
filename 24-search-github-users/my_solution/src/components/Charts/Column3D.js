// STEP 1 - Include Dependencies
// Include react
import React from "react";

// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Include the chart type
import Charts from "fusioncharts/fusioncharts.charts";

// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const chartConfigs = {
  type: "column3d",
  width: "100%",
  height: "400",
  dataFormat: "json",
  dataSource: {
    chart: {
      caption: "Most Popular Repos by Stars",
      XAxisName: "Repos",
      XAxisNameFontSize: "16px",
      yAxisName: "Stars",
      XAxisNameFontSize: "16px",
    },
  },
};

//------------------------------------------------------------------

// // using class component

// class ChartComponent extends React.Component {
//   render() {
//     const finalChartConfigs = {
//       ...chartConfigs,
//       dataSource: {
//         ...chartConfigs.dataSource,
//         data: this.props.chartData,
//       },
//     };
//     return <ReactFC {...finalChartConfigs} />;
//   }
// }

// export default ChartComponent;

//------------------------------------------------------------------

// Using functionnal components

const ChartComponent = (props) => {
  const finalChartConfigs = {
    ...chartConfigs,
    dataSource: {
      ...chartConfigs.dataSource,
      data: props.chartData,
    },
  };

  return <ReactFC {...finalChartConfigs} />;
};

export default ChartComponent;
