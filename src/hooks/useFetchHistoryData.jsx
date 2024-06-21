import axios from "axios";
import { useEffect, useState } from "react";

const useFetchHistoryData = () => {
  const [dataSource, setDataSource] = useState();

  const getHistoryData = async () => {
    await axios
      .get("/api/log")
      .then(function (response) {
        setDataSource(response.data.reverse().splice(0, 12));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    if (!dataSource) getHistoryData();
  }, [dataSource]);

  return [dataSource];
};

export default useFetchHistoryData;
