import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import "./assets/css/common.css";
import "./index.css";
import Route from "./route";
import "bootstrap/dist/css/bootstrap.min.css";
import "./comman/index.css";
function App() {
  return (
    <Router>
      <Route />
    </Router>
  );
}

export default App;
