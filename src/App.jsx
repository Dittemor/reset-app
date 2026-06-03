import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ChoresPage from "./pages/ChoresPage";
import RewardsPage from "./pages/RewardsPage";
import ProfilesPage from "./pages/ProfilesPage";
import ResetPage from "./pages/ResetPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profiles" element={<ProfilesPage />} />
        <Route path="/chores" element={<ChoresPage />} />
        <Route path="/rewards" element={<RewardsPage />} />
        <Route path="/reset" element={<ResetPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/admin" element={<ChoresPage />} />
        <Route path="/error" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
