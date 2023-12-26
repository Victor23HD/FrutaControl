import { BrowserRouter, Routes, Route } from "react-router-dom";
import ModelPage from "./components/ModelPage/index";
import Dashboard from "./pages/dashboard/index";
import Login from "./pages/login/index";
import User from "./pages/user/index.jsx";
import Backup from "./pages/backup/index.jsx";
import Supplier from "./pages/supplier/index.jsx";
import Report from "./pages/report/index.jsx";
import Register from "./pages/register/index.jsx";
import Stock from "./pages/stock/index.jsx";
import CustomerRegister from "./pages/customer/register/index.jsx"
import CustomerList from "./pages/customer/list/index.jsx"
import Sale from "./pages/sale/index.jsx";



function App() {
  return (
    <BrowserRouter>
      <Routes>
         {/*DafaultRoute*/}
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
        {/*UserRoute*/}
        <Route
          path="/User"
          element={
            <ModelPage>
              <User />
            </ModelPage>
          }
        />
        {/*BackupRoute*/}
        <Route
          path="/Backup"
          element={
            <ModelPage>
              <Backup />
            </ModelPage>
          }
        />
        {/*SupplierRoute*/}
        <Route
          path="/Supplier"
          element={
            <ModelPage>
              <Supplier />
            </ModelPage>
          }
        />
        {/*ReportRoute*/}
        <Route
          path="/Report"
          element={
            <ModelPage>
              <Report />
            </ModelPage>
          }
        />
        {/*RegisterRoute*/}
        <Route
          path="/Register"
          element={
            <ModelPage>
              <Register />
            </ModelPage>
          }
        />
        {/*StockRoute*/}
        <Route
          path="/Stock"
          element={
            <ModelPage>
              <Stock />
            </ModelPage>
          }
        />
         {/*CustomerRegisterRoute*/}
         <Route
          path="/Customer/Register"
          element={
            <ModelPage>
              <CustomerRegister />
            </ModelPage>
          }
        />
         {/*CustomerListRoute*/}
         <Route
          path="/Customer/List"
          element={
            <ModelPage>
              <CustomerList />
            </ModelPage>
          }
        />
          {/*SaleRoute*/}
          <Route
          path="/Sale"
          element={
            <ModelPage>
              <Sale />
            </ModelPage>
          }
        />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
