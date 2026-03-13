import { Routes, Route } from "react-router-dom";
import Landing from "../pages/Landing/Landing";
import Music from "../pages/Music/Music";
import About from "../pages/About/About";
import Images from "../pages/Images/Images";
import Merch from "../pages/Merch/Merch";
import Shows from "../pages/Shows/Shows";
import Contact from "../pages/Contact/Contact";
import DashboardLayout from "../components/layout/DashboardLayout";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />

      <Route element={<DashboardLayout />}>
        <Route path="/music" element={<Music />} />
        <Route path="/about" element={<About />} />
        <Route path="/images" element={<Images />} />
        <Route path="/merch" element={<Merch />} />
        <Route path="/shows" element={<Shows />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
