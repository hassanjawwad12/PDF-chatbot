import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Auth/Login";
import Signup from "./Components/Auth/Signup";
import Terms from "./Components/Terms";
import Privacy from "./Components/Privacy";
import { Fragment } from "react";
import "./index.css";
import Homepage from "./Components/Homepage";
import Dashboard from "./Components/Dashboard";
import ChatPage from "./Components/Chat";
import Pricing from "./Components/Pricing";

const App = () => {
  return (
    <>
    \  <BrowserRouter>
        <Fragment>
          <Routes>
            {/* <Route exact path="/" Component={Test} /> */}
            <Route exact path="/hp" Component={Homepage} />
            <Route exact path="/" Component={ChatPage} />
            <Route exact path="/signup" Component={Signup} />
            <Route exact path="/login" Component={Login} />
            <Route exact path="/terms" Component={Terms} />
            <Route exact path="/privacy" Component={Privacy} />
            <Route exact path="/dashboard" Component={Dashboard} />
            <Route exact path="/pricing" Component={Pricing} />
          </Routes>
        </Fragment>
      </BrowserRouter>
    </>
  );
};

export default App;
