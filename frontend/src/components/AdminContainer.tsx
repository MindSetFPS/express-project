import {
    Switch,
    Route,
    useRouteMatch,
} from "react-router-dom";
import Admin from "./Admin";


export default function AdminContainer() {

    let match = useRouteMatch();

    return (
        <div >
            {/* The page has its own <Switch> with more routes
          that build on the /admin URL path. You can think of the
          2nd <Route> here as an "index" page for all admins, or
          the page that is shown when no admin is selected */}
            <Switch>
                <Route path={`${match.path}/products`}>
                    <Admin type="Product" />
                </Route>
                <Route path={`${match.path}/users`}>
                    <Admin type="User" />
                </Route>
                <Route path={`${match.path}/sales`}>
                    <Admin type="Sale" />
                </Route>
                <Route path={match.path}>
                    <h3>Bienvenido</h3>
                </Route>
            </Switch>
        </div>
    )
}