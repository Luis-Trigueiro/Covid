import React from "react";
import Home from "../pages/home/Home";
import CharacterPage from "../pages/character/CharacterPage";
import {
    BrowserRouter as Router,
    Routes as Switch,
    Route
} from "react-router-dom";

const Routes = () => {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route path="/" element={<Home/>} />,
                <Route path="/:id" element={<CharacterPage/>} />
            </Switch>
        </Router>

    )
}

export default Routes