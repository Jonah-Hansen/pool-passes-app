import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.scss';
import HomePage from "./pages/HomePage/HomePage";
import SettingsPage from "./pages/SettingsPage/SettingsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
