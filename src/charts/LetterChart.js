import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const ChartComponent = ({data}) => {
  const chartConfigs = {
  type: "doughnut2d", // The chart type
  width: "100%", // Width of the chart
  height: "300", // Height of the chart
  dataFormat: "json", // Data type
  dataSource: {
    // Chart Configuration
    chart: {
      //caption: "in Percentage",
      outCnvBaseFont: 'Product Sans',
      showLabels: "0",
      theme: "fusion",
      decimals: 0,
      pieRadius: '65%',
      defaultCenterLabel: `${data[0].value.toString()} words`,
      centerLabelBold: "1",
    },
    // Chart Data
    data,
  }
};
  return <ReactFC {...chartConfigs} />
}


export default ChartComponent;