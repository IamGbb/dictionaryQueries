import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const ChartComponent = ({data}) => {
  const chartConfigs = {
  type: "column2d", // The chart type
  renderAt: 'chart-container',
  width: "100%", // Width of the chart
  height: "30%", // Height of the chart
  dataFormat: "json", // Data type
  dataSource: {
    // Chart Configuration
    chart: {
      //caption: "in Percentage",
      labelDisplay: "auto",
      rotateLabels: '0',
      outCnvBaseFont: 'Product Sans',
      showLabels: "1",
      theme: "fusion",
      decimals: 1,
      centerLabelBold: "1"
      
    },
    // Chart Data
    data,
  }
};
  return <ReactFC {...chartConfigs} />
}


export default ChartComponent;