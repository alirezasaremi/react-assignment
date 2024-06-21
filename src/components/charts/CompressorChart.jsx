
import { useEffect } from "react";
import Plot from "react-plotly.js";
import useUserLog from "../../hooks/useUserLog";
import useGetChartData from "../../hooks/useGetChartData";

const CompressorChart = () => {
  const [logUserActivity] = useUserLog();
  const { chartData, chartDataError } = useGetChartData("/api/chart/pie");

  useEffect(() => {
    logUserActivity("Dashboard", "Compressor Chart");
  }, []);

  return (
    <div>
      {chartDataError && <p>{chartDataError}</p>}
      {chartData && (
        <Plot
          data={[
            {
              values: chartData.values,
              labels: chartData.labels,
              type: "pie",
              textinfo: "label+percent",
              insidetextfont: { color: "#e5e7eb" },
            },
          ]}
          layout={{
            width: "100%",
            height: 475,
            title: "کمپرسور",
            font: { family: "Noto Sans Arabic" },
          }}
        />
      )}
    </div>
  );
};

export default CompressorChart;
