import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CountryList from "./CountryList";
import CountrySingle from "./CountrySingle";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.body.style.backgroundColor = 'black'; // Set the desired background color
    // You can modify other CSS properties as well, such as document.body.style.backgroundImage, etc.
  }, []);
  return (
    <Router>
    <Routes>
    <Route path="/" element={<CountryList/>}/>
    <Route path="/country/:name" element={<CountrySingle/>}/>
    </Routes>
    </Router>
  );
}

export default App;
