
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateAuctionPage from './pages/CreateAuctionPage';
import AuctionHousePage from './pages/AuctionHousePage';
import NoPage from './pages/NoPage';
import AboutUs from "./pages/AboutUsPage";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuctionHousePage />}/>
        <Route path="/create" element={<CreateAuctionPage />} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;