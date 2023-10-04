import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Banner from "./components/popup/Banner";
import Options from "./components/popup/Options";
import Form from "./components/popup/Form";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="banner" element={<Banner />} />
        <Route path="options" element={<Options />} />
        <Route path="form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
