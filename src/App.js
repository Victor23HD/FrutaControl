import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*LoginRoute*/}
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
