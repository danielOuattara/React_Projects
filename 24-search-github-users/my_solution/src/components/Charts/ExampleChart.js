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
  type: "bar3d", // The chart type
  width: "400", // Width of the chart
  height: "400", // Height of the chart
  dataFormat: "json", // Data type
  dataSource: {
    // Chart Configuration
    chart: {
      //Set the chart caption
      caption: "Countries With Most Oil Reserves [2017-18]",
      //Set the chart subcaption
      subCaption: "In MMbbl = One Million barrels",
      //Set the x-axis name
      xAxisName: "Country",
      //Set the y-axis name
      yAxisName: "Reserves (MMbbl)",
      numberSuffix: "K",
      //Set the theme for your chart
      theme: "fusion",
    },
    // Chart Data
    // data: this.props.chartData,
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
