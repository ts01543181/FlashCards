import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import HomeContainer from "./components/HomeContainer";
import CollectionContainer from "./components/CollectionContainer";
import ReviewContainer from "./components/ReviewContainer";
import MockContainer from "./components/MockContainer";
import Nav from "./components/Nav";

const App = ({store}) => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Nav />
                <Switch>
                    <Route exact path="/collection" component={HomeContainer}/>
                    <Route exact path="/collection/:collection" component={CollectionContainer}/>
                    <Route exact path="/review" component={ReviewContainer}/>
                    <Route exact path="/mock" component={MockContainer}/>
                    <Route exact path="/mock/:collection/:time" component={MockContainer}/>
                    <Redirect to="/collection" />
                </Switch>
            </BrowserRouter>
        </Provider>
    )
};

export default App;