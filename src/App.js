import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { useState, useMemo } from 'react';

import Home from '@pages/Home';
import Downloads from '@pages/Downloads';
import Reviews from '@pages/Reviews';
import Header from '@components/Header';
import Footer from '@components/Footer';
import UserContext from "./context/UserContext";

export default function App() {
  const [user, setUser] = useState(null);
  const value = useMemo(
    () => ({ user, setUser }), 
    [user]
  );

  return (
    <UserContext.Provider value={value}>
    <Router>
      <Header />
      <div>
        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/downloads">
            <Downloads />
          </Route>
          <Route path="/reviews">
            <Reviews />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
    </UserContext.Provider>
  );
}
