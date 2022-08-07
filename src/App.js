import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar.js";
import Dashboard from "./pages/Dashboard.js";
import LinkExchange from "./pages/LinkExchange.js";
import BuyCover from "./pages/BuyCover.js";
import AllCovers from "./pages/AllCovers.js";
import AllClaims from "./pages/AllClaims.js";
function App() {
  return (
    <div>
      <Router>
        <Sidebar>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/link-exchange" element={<LinkExchange />} />
            <Route path="/all-covers" element={<AllCovers />} />
            <Route path="/buy-cover" element={<BuyCover />} />
            <Route path="/all-claims" element={<AllClaims />} />
          </Routes>
        </Sidebar>
      </Router>
    </div>
  );
}

export default App;
