import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import HomeContainer from "./components/HomeContainer";
import CollectionContainer from "./components/CollectionContainer";
import Nav from "./components/Nav";

const App = ({store}) => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Nav />
                <Switch>
                    <Route exact path="/home" component={HomeContainer}/>
                    <Route exact path="/collection/:collection" component={CollectionContainer}/>
                </Switch>
            </BrowserRouter>
        </Provider>
    )
};

export default App;