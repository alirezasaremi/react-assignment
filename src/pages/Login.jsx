import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, Row } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useUserLog from "../hooks/useUserLog";
const LoginPage = () => {
  const navigate = useNavigate();

  const [logUserActivity] = useUserLog();

  const getUser = async (username, password) => {
    await axios
      .get("/api/auth", {
        username,
        password,
      })
      .then(function (response) {
        const user = response.data[0];
        localStorage.setItem("token", user.jwt);
        logUserActivity("login", "login");
        navigate("/dashboard");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const onFinish = (values) => {
    getUser(values.username, values.password);
  };
  return (
    <Row
      type="flex"
      justify="center"
      align="middle"
      style={{
        minHeight: "100vh",
      }}
    >
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        style={{
          padding: "50px",
          backgroundColor: "#F7F7F7",
          borderRadius: "8px",
          boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)",
        }}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            style={{ width: "100%" }}
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
    </Row>
  );
};
export default LoginPage;
