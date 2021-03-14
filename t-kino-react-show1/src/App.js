import { React, Suspense, lazy } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/custom-styles.css";


import { Nav } from "./Nav";
import CatalogComponent from "./CatalogComponent";
import FooterComponent from "./Footer";

import RegisterComponent from "./RegisterComponent";
import LoginComponent from "./LoginComponent";
import ResetPasswordComponent from "./ResetPasswordComponent";

import MovieConfigurationComponent from "./MovieConfigurationComponent";
import FavouriteFilmsComponent from "./FavouriteFilmsComponent";
import ProfileComponent from "./ProfileComponent";
import {MovieComponent} from "./MovieComponent";
import {PreviewComponent} from "./MovieComponent";
import FriendsComponent from "./FriendsComponent";





const NoMatchPage = () => {
  return <h3>404 - Not found</h3>;
};

function App() {
  return (
    <Router>
          <Nav />
          <main className="flex-fill">
            <Switch>
              <Route path="/" exact component={CatalogComponent} />
              <Route path="/login" exact component={LoginComponent} />
              <Route path="/register" exact component={RegisterComponent} />
              <Route path="/resetpwd" exact component={ResetPasswordComponent} />

              <Route path="/movie/add" exact component={MovieConfigurationComponent} />
              <Route path="/movie" exact component={MovieComponent} />
              <Route path="/preview" exact component={PreviewComponent} />


              <Route path="/profile/favs" exact component={FavouriteFilmsComponent} />

              <Route path="/profile" exact component={ProfileComponent} />
              <Route path="/friends" exact component={FriendsComponent} />

              <Route component={NoMatchPage} />
            </Switch>
          </main>
          <FooterComponent/>
    </Router>
  );
}

export default App;
