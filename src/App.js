import React from 'react';
import './App.css';
import {NavLink, Router, Switch, Route, BrowserRouter} from 'react-router-dom';

import Home from './components/Home';
import About from './components/AboutUs';
import Resources from './components/Resources';
import GetInvolved from './components/GetInvolved';
import Events from './components/Events';
import Footer from './components/Footer';

import NavBar from './components/NavBar';

{/*<link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Playfair+Display:wght@500;600;700;800;900&display=swap" rel="stylesheet"></link>*/}

const App = () => (
    <div className='app'>
      <BrowserRouter>
        <NavBar />
        <Main />
        <Footer />
      </BrowserRouter>
    </div>
);


const Main = () => (
    <div className={'main'}>
      <Switch>
        <Route exact path='/getInvolved' component={GetInvolved}></Route>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/about' component={About}></Route>
        <Route exact path='/events' component={Events}></Route>
        <Route exact path='/resources' component={Resources}></Route>
        <Route exact path='/getInvolved' component={GetInvolved}></Route>
      </Switch>
    </div>
);

export default App;