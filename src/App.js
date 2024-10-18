import { React, useState, createContext, useEffect, useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "./App.css";
//
import { ThemeContext } from "./context/theme";
//
import Home_Nav from "./components/home_nav";
import "bootstrap/dist/css/bootstrap.min.css";
//front website
import App_Routes from "./routes/app_routes";
//for dashboard
import Dash_Routes from "./routes/dash_routes";
//export context
export const Context = createContext();

function App() {
  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);
  useEffect(() => {
    const item = JSON.parse(localStorage.getItem("items"));
    if (item) {
      setSignedIn(true);
    } else {
      setSignedIn(false);
    }
  });
  const [signedIn, setSignedIn] = useState();
  return (
    <Context.Provider value={[signedIn, setSignedIn]}>
      <Router>
        <div
          style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
        >
          {signedIn ? <Dash_Routes /> : <App_Routes />}
        </div>
      </Router>
    </Context.Provider>
  );
}

export default App;
