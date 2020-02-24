import React, {useState, useContext} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import AppContext from './AppContext.js';
import LandingPage from './LandingPage.js';
import ServicesPage from './Services.js';
import ContactPage from './Contact.js';
import WorkersPage from './Workers.js';
import TestimonialsPage from './Testimonials.js';

const App = () => {
    const [globalState, setGlobalState] = useState(
        {
          loggedIn: false,
        }
    )
    return(
        <AppContext.Provider value={[globalState, setGlobalState]}>
            <BrowserRouter>
            <Switch>
                <Route path="/" exact component={LandingPage}/>
                <Route path="/services" component={ServicesPage}/>
                <Route path="/contact" component={ContactPage}/>
                <Route path="/workers" component={WorkersPage}/>
                <Route path="/testimonials" component={TestimonialsPage}/>
            </Switch>
            </BrowserRouter>
        </AppContext.Provider>
    )
}

export default App;