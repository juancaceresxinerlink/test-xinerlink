import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import { SearchScreen } from '../components/search/SearchScreen';
import { CargosScreen } from '../components/others/CargosScreen';
import { GoodJobScreen } from '../components/others/GoodJobScreen';
import { HomeScreen } from '../components/home/HomeScreen';
import { Navbar } from '../components/ui/Navbar';
import { Footer } from '../components/ui/Footer';

export const AppRouter = () => {
    return (
        <Router>
            <div id="wrapper">
            <Navbar/>
            <Switch>
                <Route exact path="/oportunidades" component={SearchScreen}/>
                <Route exact path="/cargos" component={CargosScreen}/>
                <Route exact path="/un-buen-trabajo" component={GoodJobScreen}/>
                <Route exact path="/" component={HomeScreen} />

                <Redirect to="/"/>
            </Switch>
            </div>
            <Footer/>
        </Router>
    )
}
