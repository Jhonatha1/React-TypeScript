import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {Store} from "./pages/Store";
import {Cart} from "./pages/Cart";
import {Login} from "./Login";
import {Profile} from "./pages/Profile";
import {ProfileEdit} from "./pages/ProfileEdit";
import { NewProfile } from './pages/NewProfile';
import { FinishPayment } from './pages/FinishPayment';



export const Content = () => {
    return (

       <Switch>
        <Route exact path='/finishPayment/:price' component={FinishPayment} />
        <Route exact path='/newprofile' component={NewProfile} />
        <Route exact path='/profile/edit' component={ProfileEdit} />
        <Route exact path='/profile' component={Profile} />
        <Route exact path='/cart' component={Cart} />
        <Route exact path='/store' component={Store} />
        <Route exact path='/' component={Login} />

         </Switch>

    )
}