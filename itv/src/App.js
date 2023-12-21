import React from "react";
import ReactTV, { renderOnAppLoaded } from "react-tv";
import { withFocusable, withNavigation } from "react-tv-navigation";
import Home from "./Home";
import ChannelCategories from "./ChannelCategories";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
} from "react-router-dom";

function App({ currentFocusPath }) {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" render={(props) => <Home {...props} currentFocusPath={currentFocusPath} />}  />
                    <Route path="/channels" render={(props) => <ChannelCategories {...props} currentFocusPath={currentFocusPath} />}/>
                    <Route path="/ChannelCategories" render={(props) => <ChannelCategories {...props} currentFocusPath={currentFocusPath} />}/>
                </Switch>
            </div>
        </Router>
    );
}

const AppWithNavigation = renderOnAppLoaded(withNavigation(App));

ReactTV.render(<AppWithNavigation />, document.querySelector("#root"));
