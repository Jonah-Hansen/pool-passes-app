import 'react-confirm-alert/src/react-confirm-alert.css';
import { HashRouter, Route, Routes } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';
import SettingsProvider from "./context/SettingsProvider";
import HomePage from "./pages/HomePage/HomePage";
import SettingsPage from "./pages/SettingsPage/SettingsPage";

function App() {
  return (
    <SettingsProvider >
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </HashRouter>
    </SettingsProvider>
  );
}

export default App;
