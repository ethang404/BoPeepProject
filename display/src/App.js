import logo from "./logo.svg";
import "./App.css";
import { Chart } from "react-google-charts";

const data = [
	["From", "To", "Weight"],
	["Fuel", "Process Heating", 835],
	["ProcessHeating", "Applied Energy", 860],
	["ProcessHeating", "Loss", 378],
	["Applied Energy", "Electricity", 84],
	["Onsite Steam Generation", "Non-FCC process", 110],
];

const options = {};
export function App() {
	return (
		<div className="container">
			<Chart chartType="Sankey" width="60%" height="100%" data={data} options={options} />
		</div>
	);
}

export default App;
