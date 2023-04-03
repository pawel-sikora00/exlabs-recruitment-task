import Baner from "./components/Baner";
import BeersListPage from "./pages/BeersListPage";
import { Route, Routes } from "react-router-dom";
import BeerDetailPage from "./pages/BeerDetailPage";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <>
      <Baner />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/page/:pageId" element={<BeersListPage />} />
        <Route path="/:beerId" element={<BeerDetailPage />} />
        <Route path="/details/:beerId" element={<BeerDetailPage />} />
      </Routes>
    </>
  );
}

export default App;
