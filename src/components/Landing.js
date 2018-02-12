import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Paper } from 'material-ui';
import * as routes from '../routes';
import bg from '../img/group.jpeg';

const styles = {
    height: 100,
    width: 100,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
};


const jumboStyle = {
    root: {
        backgroundImage: `url(${ bg })`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat', 
        overflow: 'hidden',
        fontSize: '12px',
        color: 'white',
    },
    heading: {
        fontSize: '75px',
        color: 'white',
        fontFamily: 'roboto',
        letterSpacing: '3px',
        textShadow: '2px 2px grey',
    }, 
    subtext: {
        fontSize: '50px',
        color: 'orange',
        fontFamily: 'roboto',
        letterSpacing: '1px', 
        textShadow: '2px 2px #323334',
    },
    button: {
        padding: '10px 24px',
        width: '150px',
    }
}

export default class Landing extends Component {

    render() {

        return (
            <div><br /><br />
                <div className="jumbotron jumbotron-fluid text-center" style={jumboStyle.root}>
                    <div className="container" >
                    <h2 className="text-center" style={jumboStyle.heading}>THUTO LWETHU</h2>                

                    <span className="lead">
                    <p className="lead" style={jumboStyle.subtext}>A brilliant way to study</p>
                        <Link to={routes.LOG_IN}>
                            <button style={jumboStyle.button} type="button" className="btn btn-dark btn-lg">
                                Sign In
                            </button>
                        </Link>
                    </span>
                    </div>
                </div>

                <div className="container">
                    <div className="row">

                        <div className="col text-center">
                            <Paper style={styles} zDepth={2} circle={true}>
                                <br />
                                <i className="fa fa-area-chart fa-3x"></i>
                            </Paper>   
                            <hr />
                            <p>
                                Thuto Lwethu's real-time analytics platform will monitor your learning progress.
                            </p>
                        </div>

                        <div className="col text-center">
                            <Paper style={styles} zDepth={2} circle={true}>
                                <br />
                                <i className="fa fa-book fa-3x"></i>
                            </Paper>
                            <hr />
                            <p>
                                All your course material like textbooks and study guides available to you through the app. Convenience. 
                            </p>
                        </div>

                        <div className="col text-center">
                            <Paper style={styles} zDepth={2} circle={true}>
                                <br />
                                <i className="fa fa-comments fa-3x"></i>
                            </Paper>
                            <hr />
                            <p>
                                Through the IM feature you can communicate with your teachers and fellow classmates about schoolwork.
                            </p>
                        </div>

                    </div>
                </div>
                <br /><br /><br />
            </div>
        );

    }

}