// // STEP 1 - Include Dependencies
// // Include react

// // Include the react-fusioncharts component
// import ReactFC from "react-fusioncharts";

// // Include the fusioncharts library
// import FusionCharts from "fusioncharts";

// // Include the chart type
// import Chart from "fusioncharts/fusioncharts.charts";

// // Include the theme as fusion
// import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// // Adding the chart and theme as dependency to the core fusioncharts
// ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

// // STEP 2 - Chart Data
// const chartData = [
//   {
//     label: "Venezuela",
//     value: "290",
//   },
//   {
//     label: "Saudi",
//     value: "260",
//   },
//   {
//     label: "Canada",
//     value: "180",
//   },
//   {
//     label: "Iran",
//     value: "140",
//   },
//   {
//     label: "Russia",
//     value: "115",
//   },
//   {
//     label: "UAE",
//     value: "100",
//   },
//   {
//     label: "US",
//     value: "30",
//   },
//   {
//     label: "China",
//     value: "30",
//   },
// ];

// // STEP 3 - Creating the JSON object to store the chart configurations
// const chartConfigs = {
//   type: "column2d", // The chart type
//   width: "700", // Width of the chart
//   height: "400", // Height of the chart
//   dataFormat: "json", // Data type
//   dataSource: {
//     // Chart Configuration
//     chart: {
//       //Set the chart caption
//       caption: "Countries With Most Oil Reserves [2017-18]",
//       //Set the chart subcaption
//       subCaption: "In MMbbl = One Million barrels",
//       //Set the x-axis name
//       xAxisName: "Country",
//       //Set the y-axis name
//       yAxisName: "Reserves (MMbbl)",
//       numberSuffix: "K",
//       //Set the theme for your chart
//       theme: "fusion",
//     },
//     // Chart Data
//     data: chartData,
//   },
// };

// // STEP 4 - Creating the DOM element to pass the react-fusioncharts component
// export default function ExampleChart() {
//   return <ReactFC {...chartConfigs} />;
// }

//===============================================================

/* Using class components 
-------------------------------*/

// import ReactFC from "react-fusioncharts";
// import FusionCharts from "fusioncharts";
// import Charts from "fusioncharts/fusioncharts.charts";
// import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

// const chartConfigs = {
//   type: "bar3d", // The chart type
//   width: "400", // Width of the chart
//   height: "400", // Height of the chart
//   dataFormat: "json", // Data type
//   dataSource: {
//     chart: {
//       caption: "Countries With Most Oil Reserves [2017-18]",
//       subCaption: "In MMbbl = One Million barrels",
//       xAxisName: "Country",
//       yAxisName: "Reserves (MMbbl)",
//       numberSuffix: "K",
//       theme: "fusion",
//     },
//     // data: this.props.chartData,
//   },
// };

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

//===============================================================

/*Using functional components 
-------------------------------*/

import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const chartData = [
  { label: "HTML", value: "23" },
  { label: "CSS", value: "43" },
  { label: "JavaScript", value: "80" },
];

const chartConfigs = {
  type: "bar3d", // The chart type
  width: "400", // Width of the chart
  height: "400", // Height of the chart
  dataFormat: "json", // Data type
  dataSource: {
    chart: {
      caption: "Countries With Most Oil Reserves [2017-18]",
      subCaption: "In MMbbl = One Million barrels",
      xAxisName: "Country",
      yAxisName: "Reserves (MMbbl)",
      numberSuffix: "K",
      theme: "fusion",
    },
    // data: this.props.chartData,
  },
};

const ChartComponent = (props) => {
  const finalChartConfigs = {
    ...chartConfigs,
    dataSource: {
      ...chartConfigs.dataSource,
      // data: props.chartData,
      data: chartData,
    },
  };

  return <ReactFC {...finalChartConfigs} />;
};

export default ChartComponent;
