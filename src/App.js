import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import HomeContainer from "./components/HomeContainer";
import CardContainer from "./components/CardContainer";
import Nav from "./components/Nav";

const App = ({store}) => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Nav />
                <Switch>
                    <Route exact path="/home" component={HomeContainer}/>
                    <Route exact path="/card/:collection" component={CardContainer}/>
                </Switch>
            </BrowserRouter>
        </Provider>
    )
};

export default App;