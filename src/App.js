import Header from "./Components/Header";
import Home from "./Components/Home";
import Checkout from "./Components/Checkout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
