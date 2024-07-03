import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Breadcrumbs from "./components/Breadcrumb";
import GridPage from "./components/GridPage";
import TablePage from "./components/TablePage";
import Cards from "./components/Cards";
import Card1 from "./pages/Card1";
import Card2 from "./pages/Card2";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Breadcrumbs />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/card" element={<Cards />} />
          <Route path="/card/card1" element={<Card1 />} />
          <Route path="/card/card2" element={<Card2 />} />
          <Route path="/grid" element={<GridPage />} />
          <Route path="/table" element={<TablePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
