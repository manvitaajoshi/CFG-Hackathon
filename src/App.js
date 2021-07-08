import Dashboard from "./components/Dashboard"
import SignUp from "./components/SignUp"
import LogIn from "./components/LogIn"
import PrivateRoute from "./components/PrivateRoute"
import ForgotPassword from "./components/ForgotPassword"
import UpdateProfile from "./components/UpdateProfile"
import CRUD1 from "./components/CRUD1"
import CRUD2 from "./components/CRUD2"
import CRUD3 from "./components/CRUD3"
import FNF from "./components/404"
import Home from "./components/Home.js"
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css';
import { useState } from 'react'

function App() {


  return (
    <>
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard} />
            <PrivateRoute exact path="/update-profile" component={UpdateProfile} />
            <PrivateRoute exact path="/home" component={Home} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/login" component={LogIn} />
            <Route exact path="/crud1" component={CRUD1} />
            <Route exact path="/crud2" component={CRUD2} />
            <Route exact path="/crud3" component={CRUD3} />
            <Route exact path="/forgot-password" component={ForgotPassword} />
            <Route exact path="/404" component={FNF} />
            <Redirect to="/404" />
          </Switch>
        </AuthProvider>
      </Router >
    </>
  );
}

export default App;
