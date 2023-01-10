import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.scss';
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import SettingsPage from "./pages/SettingsPage/SettingsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
