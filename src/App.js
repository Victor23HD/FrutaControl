import { BrowserRouter, Routes, Route } from "react-router-dom";
import ModelPage from "./components/ModelPage/index";
import Dashboard from "./pages/dashboard/index";
import Login from "./pages/login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*LoginRoute*/}
        <Route path="/" element={<Login />} />
        {/*DashboardRoute*/}
        <Route
          path="/Dashboard"
          element={
            <ModelPage>
              <Dashboard />
            </ModelPage>
          }
        />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
