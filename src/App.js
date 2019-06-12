import React from 'react';

import { BrowserRouter as Router, Route } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";

import Header from './components/navigation/Header';
import Footer from './components/navigation/Footer';
import { Home, Contact, Hours, Menu } from './pages';


function App() {
  return (
    <main>
      <Router>
        <Header />

        <AnimatedSwitch
          atEnter={{ opacity: 0, left: -100 }}
          atLeave={{ opacity: 0, left: 100 }}
          atActive={{ opacity: 1, left: 0 }}
          className="switch-wrapper"
        >
          <Route path="/" exact component={Home} />
          <Route path="/menu" component={Menu} />
          <Route path="/hours" component={Hours} />
          <Route path="/contact" component={Contact} />
        </AnimatedSwitch>

        <Footer />
      </Router>
    </main>
  );
}

export default App;
