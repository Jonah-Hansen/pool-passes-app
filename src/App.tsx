import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.scss';
import SettingsProvider from "./context/SettingsProvider";
import HomePage from "./pages/HomePage/HomePage";
import SettingsPage from "./pages/SettingsPage/SettingsPage";

function App() {
  return (
    <SettingsProvider >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </BrowserRouter>
    </SettingsProvider>
  );
}

export default App;
