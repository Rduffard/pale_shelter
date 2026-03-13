import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

function DashboardLayout() {
  return (
    <div className="site-shell">
      <Navbar />
      <main className="site-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default DashboardLayout;
