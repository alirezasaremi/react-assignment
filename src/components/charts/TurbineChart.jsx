
import { useEffect } from "react";
import Plot from "react-plotly.js";
import useUserLog from "../../hooks/useUserLog";
import useGetChartData from "../../hooks/useGetChartData";

const TurbineChart = () => {
  const [logUserActivity] = useUserLog();
  const { chartData, chartDataError } = useGetChartData("/api/chart/bar");


  useEffect(() => {
    logUserActivity("Dashboard", "Turbine Chart");
  }, []);

  return (
    <div>
      {chartDataError && <p>{chartDataError}</p>}
      {chartData && (
        <Plot
          data={[{ type: "bar", x: chartData.x, y: chartData.y }]}
          layout={{
            width: "100%",
            height: "600px",
            title: "توربین",
            font: { family: "Noto Sans Arabic" },
          }}
        />
      )}
    </div>
  );
};

export default TurbineChart;
