import React from 'react';
import { BrowserRouter as Router,
         Route,
} from 'react-router-dom';

import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';

import * as ROUTES from '../../constants/routes';

const App = () => (
    <Router>
        <div>
            <Navigation />

            <hr />

            <Route exact path={ROTES.LANDING} component={LandingPage} />
            <Route path={ROTES.SIGN_UP} component={SignUpPage} />
            <Route path={ROTES.SIGN_IN} component={SignInPage} />
            <Route path={ROTES.PASSWORD_FORGET} component={PasswordForgetPage} />
            <Route path={ROTES.HOME} component={HomePage} />
            <Route path={ROTES.ACCOUNT} component={AccountPage} />
            <Route path={ROTES.ADMIN} component={AdminPage} />
        </div>
    </Router>
);

export default App;
	
