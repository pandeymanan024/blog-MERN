import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom'
import Home from "../src/components/screens/Home"
import Category from "../src/components/screens/Category"
import Single from "../src/components/screens/Single"


function App() {
    
    return ( 
    <BrowserRouter>
    <Route exact path = "/">
    <Home/>
    </Route>
    <Route path = "/category">
    <Category/>
    </Route>
    <Route path = "/single">
    <Single/>
    </Route>
    <Route path = "/">
    <Home/>
    </Route>
    </BrowserRouter>
      
    )
}

export default App;