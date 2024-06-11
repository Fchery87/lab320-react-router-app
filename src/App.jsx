import "./App.css";
import { Route, Routes } from "react-router-dom";
import Currencies from "./pages/Currencies/Currencies.jsx";
import Main from "./pages/Main/Main.jsx";
import Price from "./pages/Price/Price.jsx";
import Nav from "./components/NavBar/NavBar.jsx";
import './App.css'

function App() {


  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/currencies" element={<Currencies />} />
        <Route path="/price/:symbol" element={<Price />} />
      </Routes>
    </div>
  );
}

export default App
