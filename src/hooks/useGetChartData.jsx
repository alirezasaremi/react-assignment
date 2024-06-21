import axios from "axios";
import { useEffect, useState } from "react";

const useGetChartData = (url) => {
  const [chartData, setChartData] = useState(null);
  const [chartDataError, setChartDataError] = useState(null);

  const getChartData = async () => {
    setChartDataError(null);
    await axios
      .get(url)
      .then(function (response) {
        console.log(response.data);
        setChartData(response.data);
      })
      .catch(function (error) {
        setChartDataError(error);
      });
  };

  useEffect(() => {
    if (url) {
      getChartData();
    }
  }, [url]);

  return { chartData, chartDataError };
};

export default useGetChartData;
