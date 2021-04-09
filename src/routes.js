import React from 'react';
import { Switch, Route } from 'react-router-dom'
import CakeContainer from './components/CakeContainer';
import { HooksCakeContainer } from './components/HooksCakeContainer';
import HooksUserContainer from './components/HooksUserContainer';
import Login from './components/Login';
import PostFormData from './components/PostFormData';
import UserContainer from './components/UserContainer';
import { authenticated } from './helpers/Authentication';
import { PrivateRoute } from './PrivateRoute';
import StyledComponentNormal from '../src/StyledComonents/StyledComponentNormal'

export const Routes = () => {
    return (
        <>
            <Switch>
                <Route  exact path="/" component={Login} />
                <PrivateRoute authenticated={authenticated} exact path="/buy_Cake" component={CakeContainer} />
                <PrivateRoute authenticated={authenticated} exact path="/buy_Cake_shared_state" component={HooksCakeContainer} />
                <PrivateRoute authenticated={authenticated} exact path="/get_User" component={UserContainer} />
                <PrivateRoute authenticated={authenticated} exact path="/get_User_shared_state" component={HooksUserContainer} />
                <PrivateRoute authenticated={authenticated} exact path="/post_data" component={PostFormData} />
                <Route exact to="/styled_comp_normal"><StyledComponentNormal /></Route>
                {/* <Route exact path="/buy_Cake">
                    <CakeContainer />
                </Route>
                <Route exact path="/buy_Cake_shared_state">
                    <HooksCakeContainer />
                </Route>
                <Route exact path="/get_User">
                    <UserContainer />
                </Route>
                <Route exact path="/get_User_shared_state">
                    <HooksUserContainer />
                </Route>
                <Route exact path="/nav"><Nav /></Route> */}
            </Switch>
        </>
    );
}

