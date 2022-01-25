import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AbsPage from "./pages/AbsPage/AbsPage";
import FingerPage from "./pages/FingerPage/FingerPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<AbsPage />} />
        <Route path="FingerPage" element={<FingerPage />} />
      </Routes>
    </Router>
  );
}

export default App;
