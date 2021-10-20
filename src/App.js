import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
import Doctors from './Component/Doctors/Doctors';
import Footer from './Component/Footer/Footer';
import HealthPackageDetails from './Component/HealthPackageDetails/HealthPackageDetails';
import Home from './Component/HomePage/Home/Home';
import Login from './Component/Login/Login';
import Menubar from './Component/Menubar/Menubar';
import NotFound from './Component/NotFound/NotFound';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import Register from './Component/Register/Register';
import ServiceDetails from './Component/ServiceDetails/ServiceDetails';
import AuthProvider from './Context/Context';
import ScrollToTop from './ScrollToTop/ScrollToTop';


function App() {
  return (
    <div className="">
      <AuthProvider>
        <Router>
          <ScrollToTop> {/*scrollToTop use for react new page render from the bottom of the screen problem */}
          <Menubar></Menubar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/service/:serviceId">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <PrivateRoute path="/healthpackage/:packageId">
              <HealthPackageDetails></HealthPackageDetails>
            </PrivateRoute>
            <PrivateRoute path="/doctor">
              <Doctors></Doctors>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
          </ScrollToTop>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
