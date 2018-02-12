import React, { Component } from 'react';
import { 
    Drawer, 
    List,
    ListItem, 
    FlatButton, 
    Paper
} from 'material-ui';
import { Link } from 'react-router-dom';

import * as routes from '../routes';

export default class NavDrawer extends Component {

    constructor(props) {
        super(props);
        this.state= {open: false};
    }

    handleToggle = () => this.setState({open: !this.state.open});
    handleClose = () => this.setState({open: false});

    render() {

        return (

            <div>
                <FlatButton
                    label={<i className="fa fa-bars fa-2x" aria-hidden="true"></i>} 
                    onClick={this.handleToggle} 
                />

                <Drawer 
                    containerStyle={{backgroundColor: '#ffffe6'}}
                    open={this.state.open}
                    docked={false}
                    width={170}
                    onRequestChange={(open) => this.setState({open})}
                >   
                    <Link to={routes.LANDING}>
                        <Paper 
                            zDepth={0} 
                            style={{height: 150, width: 150, margin: 20, backgroundColor: '#ffffe6'}} 
                            onClick={this.handleClose}
                        >
                            <img className="img-fluid" src="../logo.png" alt="Thuto Lwethu" />
                        </Paper>
                    </Link> 
                    <hr />
                    <List>
                        <Link to={routes.HOME}>
                            <ListItem 
                                primaryText="Home" 
                                leftIcon={<i className="fa fa-home fa-2x"></i>}  
                                onClick={this.handleClose} 
                            />
                        </Link>
                        <Link to={routes.COURSES}>
                            <ListItem 
                                primaryText="Courses" 
                                leftIcon={<i className="fa fa-book fa-2x"></i>} 
                                onClick={this.handleClose} 
                            />
                        </Link>
                        <Link to={routes.REPORTS}>
                            <ListItem 
                                primaryText="Reports" 
                                leftIcon={<i className="fa fa-line-chart fa-2x"></i>} 
                                onClick={this.handleClose} 
                            />
                        </Link>
                        <Link to={routes.INBOX}>
                            <ListItem 
                                primaryText="Inbox" 
                                leftIcon={<i className="fa fa-comments-o fa-2x"></i>} 
                                onClick={this.handleClose} 
                            />
                        </Link>
                        <Link to={routes.NOTIFICATIONS}>
                            <ListItem 
                                primaryText="" 
                                leftIcon={<i className="fa fa-bell-o fa-2x"></i>} 
                                onClick={this.handleClose} 
                            />
                        </Link>
                    </List>
                </Drawer>
            </div>
        
        );

    }

}