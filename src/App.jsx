import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/NotFound";
import LoginPage from "./pages/Login";
import ProtectedRoute from "./route/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import History from "./pages/History";

function App() {
  return (
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/" element={<LoginPage />} index={true} />
      <Route path="/login" element={<LoginPage />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  );
}

export default App;
