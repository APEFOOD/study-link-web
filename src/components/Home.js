import React, { Component } from 'react';
import { 
    Container, 
    Row, 
    Col,  
} from 'reactstrap';
import { List, ListItem } from 'material-ui'; 

const avatar = require("../img/smiling.jpeg");

const styles = {
    text: {
        width: '100%',
	    height: '200px',
	    backgroundColor: '#8cacea',
    }
}

export default class Home extends Component {

    render() {

        return (

            <div><br /><br /><br />

                <Container fluid={true}>
                    <Row>

                        <Col>
                            <Row>
                                <Col xs={4}>
                                    <img className="img-thumbnail" src={avatar} alt="avatar" />
                                </Col>
                                <Col xs={6}>
                                    <List>
                                        <ListItem><strong>Username</strong>: Kuda_Phiri</ListItem>
                                        <ListItem><strong>Surname</strong>: Kuda</ListItem>
                                        <ListItem><strong>Name</strong>: Phiri</ListItem>
                                        <ListItem><strong>Age</strong>: 21</ListItem>
                                        <ListItem><strong>Grade</strong>: 2nd Year</ListItem>
                                        <ListItem><strong>School</strong>: ABC College</ListItem>
                                    </List> 
                                </Col>
                                <Col xs={2}>
                                    <button type="button" className="btn btn-light">
                                       <i className="fa fa-pencil"></i> Edit
                                    </button>
                                </Col>
                            </Row>
                        </Col>

                    </Row>
                    <Row>
                        
                        <Col xs={6}>
                            <i className="fa fa-align-left fa-2x"></i>&nbsp;<span><h3>Progress by subject</h3></span>
                        </Col>

                        <Col xs={6}>
                            <p className="text-center" style={styles.text}>Worklog history here</p>
                        </Col>

                    </Row>
                </Container>

            </div>
        

        );

    }

}