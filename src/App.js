import { Route, Switch, Redirect } from "react-router-dom";

import AllQuotes from "./pages/AllQuotes";
import QouteDetail from "./pages/QouteDetail";
import NewQoute from "./pages/NewQoute";
import Layout from "./components/layout/Layout";

function App() {
    return (
        <Layout>
            <Switch>
                <Route path='/' exact>
                    <Redirect to='/qoutes' />
                </Route>
                <Route path='/qoutes' exact>
                    <AllQuotes />
                </Route>
                <Route path='/qoutes/:qouteId'>
                    <QouteDetail />
                </Route>
                <Route path='/new-qoute'>
                    <NewQoute />
                </Route>
            </Switch>
        </Layout>
    );
}

export default App;
