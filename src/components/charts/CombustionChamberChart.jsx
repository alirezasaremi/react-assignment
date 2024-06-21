import { Switch } from "antd";
import { useEffect, useState } from "react";
import Plot from "react-plotly.js";
import useUserLog from "../../hooks/useUserLog";
import useGetChartData from "../../hooks/useGetChartData";

const CombustionChamberChart = () => {
  const [logUserActivity] = useUserLog();

  const { chartData, chartDataError } = useGetChartData("/api/chart/line");
  const [chartType, setChartType] = useState("line");
  const [chartMode, setChartMode] = useState("lines+markers");

  const onChartModeChange = () => {
    if (chartMode === "lines+markers") {
      setChartType("scatter");
      setChartMode("markers");
    } else {
      setChartType("line");
      setChartMode("lines+markers");
    }
  };

  useEffect(() => {
    logUserActivity("Dashboard", "Combustion Chamber Chart");
  }, []);

  return (
    <div>
      <div className="chart-mode-switch">
        <span>Scatter</span>
        <Switch defaultChecked onChange={onChartModeChange} />
        <span>Line</span>
      </div>
      {chartDataError && <p>{chartDataError}</p>}
      {chartData && (
        <Plot
          data={[
            {
              x: chartData.x,
              y: chartData.y,
              type: chartType,
              mode: chartMode,
              marker: { color: "red" },
            },
          ]}
          layout={{
            width: "100%",
            height: "600px",
            title: "محفظه احتراق",
            font: { family: "Noto Sans Arabic" },
          }}
        />
      )}
    </div>
  );
};

export default CombustionChamberChart;
