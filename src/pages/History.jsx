import { Table } from "antd";
import MasterLayout from "../hoc/MasterLayout";
import useFetchHistoryData from "../hooks/useFetchHistoryData";

const History = () => {
  const [dataSource] = useFetchHistoryData();

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Page",
      dataIndex: "page",
      key: "page",
    },
    {
      title: "Section Name",
      dataIndex: "section",
      key: "asectionge",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
  ];

  return (
    <MasterLayout>
      <h2>History</h2>
      <Table dataSource={dataSource} columns={columns} />;
    </MasterLayout>
  );
};

export default History;
