import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { AppBar, MuiThemeProvider } from 'material-ui'; 

import * as routes from '../routes';
import NavDrawer from './NavDrawer';
import Landing from './Landing';
import Home from './Home';
import Courses from './Courses';
import Reports from './Reports';
import Inbox from './Inbox';
import Login from './Login';

class AppShell extends Component {

    render() {

        return (

            <MuiThemeProvider>
                <div>

                    <AppBar   
                        style={{backgroundColor: '#ffbf80', position: 'fixed'}}
                        iconElementLeft={<NavDrawer />}
                    />
                         
                        <Switch>

                            <Route exact path={routes.LANDING} component={Landing} />
                            <Route path={routes.LOG_IN} component={Login} />
                            <Route path={routes.HOME} component={Home} />
                            <Route path={routes.COURSES} component={Courses} />
                            <Route path={routes.REPORTS} component={Reports} />
                            <Route path={routes.INBOX} component={Inbox} />

                        </Switch>

                    <footer className="footer">
                        <div className="container">
                            <span>
                                <p className="text-center">&copy; {new Date().getFullYear()} Thuto Lwethu Pty Ltd.</p> 
                            </span>
                        </div>
                    </footer>

                </div>
            </MuiThemeProvider>

        );

    }

}

export default AppShell;