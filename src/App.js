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

function App() {
  return (
    <div>
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
          <Route path="/service/:serviceId">
            <ServiceDetail></ServiceDetail>
          </Route>
          <Route path="/patients">
            <Patients></Patients>
          </Route>
          <Route path="/blog">
            <Blog></Blog>
          </Route>
          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
