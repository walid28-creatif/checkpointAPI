import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import NavBar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import ListUsers from "./Components/ListUsers/ListUsers";
import User from "./Components/User/User";
import error from "./Assets/404.jpg";
import Admin from "./Components/Admin/Admin";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  const login = () => setIsAuth(true);
  const logout = () => setIsAuth(false);

  return (
    <div className="App">
      <NavBar isAuth={isAuth} login={login} logout={logout} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/users" component={ListUsers} />
        <Route path="/users/user/:id" component={User} />
        <Route path="/admin" component={Admin} />
        <Route
          path="/*"
          component={() => (
            <img src={error} alt="error" style={{ width: "40%" }} />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
