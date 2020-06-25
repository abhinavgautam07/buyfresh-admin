import React  from 'react';
import "./style.css";
// const Component = React.Component;
const CanvasJSReact = require('../../canvasjs.react');
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

class FarmerChart extends React.Component {
	render() {
		const options = {
			exportEnabled: false,
			animationEnabled: true,
			data: [{
				type: "pie",
				radius:"60%",
				visible:true,
				startAngle: 75,
				toolTipContent: "<b>{label}</b>: {y}",
				showInLegend: false,
				indexLabelFontSize: 14,
				indexLabelFontStyle: "italic",
				indexLabelFontFamily: "calibri",
				indexLabel: "{label} - {y}%",
				dataPoints: [
					{ y: 18, label: "Wheat" },
					{ y: 49, label: "Rice" },
					{ y: 9, label: "Maize" },
					{ y: 5, label: "Moong" },
					{ y: 19, label: "Barley" }
				]
			}]
		}
		return (
	
			<CanvasJSChart options = {options}	/>
		
		);
	}
}
export default FarmerChart;                              