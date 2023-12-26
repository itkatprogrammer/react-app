import './App.css'
import { Chart } from "react-google-charts";

function App() {
  const data = [
    ["Task", "Hours per Day"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
  ];
  
  const options = {
    title: "My Daily Activities",
    is3D: true,
  };

  const data2 = [
    ["Element", "Density", { role: "style" }],
    ["Copper", 8.94, "#b87333"], // RGB value
    ["Silver", 10.49, "silver"], // English color name
    ["Gold", 19.3, "gold"],
    ["Platinum", 21.45, "color: #e5e4e2"], // CSS-style declaration
  ];
  return (
    <div>
  <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />

<Chart chartType="ColumnChart" width="100%" height="400px" data={data2} />
  </div>
  )
}
export default App

