import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import Footer from './Components/Shared/Footer/Footer';
import Header from './Components/Shared/Header/Header';
import AuthProvider from './Context/AuthProvider';
import Packages from './Components/Home/Services/Packages';
import AddPackage from './Components/AddPackage/AddPackage';
import AddOrders from './Components/AddOrders/AddOrders';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import MyOrders from './Components/MyOrders/MyOrders';
import Manageallorder from './Components/ManageAllOrder/Manageallorder';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/packages">
              <Packages />
            </Route>
            <PrivateRoute exact path="/myorders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute exact path="/allorders">
              <Manageallorder></Manageallorder>
            </PrivateRoute>
            <PrivateRoute exact path="/addorders/:bookid">
              <AddOrders></AddOrders>
            </PrivateRoute>
            <PrivateRoute exact path="/addpackage">
              <AddPackage></AddPackage>
            </PrivateRoute>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
