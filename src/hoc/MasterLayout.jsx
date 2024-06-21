import { Button, Layout, Menu } from "antd";
import { Link, useNavigate } from "react-router-dom";
const { Header, Content } = Layout;

const menuItems = [
  { key: "Dashboard", label: <Link to="/dashboard">Dashboard</Link> },
  { key: "History", label: <Link to="/history">History</Link> },
];

const MasterLayout = ({ children }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <Layout>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={menuItems}
          style={{ flex: 1, minWidth: 0 }}
        />

        <Button type="primary" danger onClick={handleLogout}>
          Logout
        </Button>
      </Header>
      <Content style={{ padding: "0 48px" }}>
        <div
          style={{
            minHeight: 280,
            padding: 24,
          }}
        >
          {children}
        </div>
      </Content>
    </Layout>
  );
};

export default MasterLayout;
