import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CountryList from "./CountryList";
import CountrySingle from "./CountrySingle";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
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
