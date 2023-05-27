import "./assets/css/app.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Details from "./pages/Details";
import Cart from "./pages/Cart";
import Congratulations from "./pages/Congratulations";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" Component={Homepage} />

          <Route exact path="/categories/:idc" Component={Details} />
          <Route path="/categories/:idc/products/:idp" Component={Details} />
          <Route path="/cart" Component={Cart} />
          <Route path="/congratulations" Component={Congratulations} />
          <Route path="*" Component={NotFound} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
