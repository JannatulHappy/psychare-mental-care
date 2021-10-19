import Header from "./Pages/Header/Header";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/Home/About/About";
import Footer from "./Pages/Shared/Footer/Footer";
import Patients from "./Pages/Patients/Patients";
import Blog from "./Pages/Blog/Blog";
import Services from "./Pages/Home/Services/Services";
import Error from "./Pages/Error/Error";
import ServiceDetail from "./Pages/ServiceDetail/ServiceDetail";
import AuthProvider from "./Pages/Context/AuthProvider";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <PrivateRoute path="/service/:serviceId">
              <ServiceDetail></ServiceDetail>
            </PrivateRoute>
            <PrivateRoute path="/patients">
              <Patients></Patients>
            </PrivateRoute>
            <PrivateRoute path="/blog">
              <Blog></Blog>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <Error></Error>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
