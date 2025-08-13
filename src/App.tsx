import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import HealthTips from "./pages/HealthTips";
import TipDetails from "./pages/TipDetails";

export default function App() {
  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    `hover:underline ${isActive ? "text-yellow-300 font-bold" : ""}`;

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* Navigation Bar */}
        <nav className="bg-[#2ecac8] text-white p-4 shadow-md">
          <ul className="container mx-auto flex space-x-6 font-semibold">
            <li>
              <NavLink to="/" className={linkClasses} end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={linkClasses}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/health-tips" className={linkClasses}>
                Health Tips
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Main Content */}
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/health-tips" element={<HealthTips />} />
            <Route path="/health-tips/:slug" element={<TipDetails />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-[#338886] text-white p-6 mt-12 shadow-inner">
          <div className="container mx-auto flex justify-between items-center text-sm">
            <p>© 2024 Sympto. Empowering better health through intelligent tracking.</p>
            <ul className="flex space-x-4">
              <li>
                <NavLink to="/" className={linkClasses} end>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={linkClasses}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/health-tips" className={linkClasses}>
                  Health Tips
                </NavLink>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </Router>
  );
}
