import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

const style = {
    width: '100%',
	height: '200px',
	backgroundColor: '#8cacea',
	margin: '8px',
}

export default class Inbox extends Component {

    render() {

        return (

            <div><br /><br /><br />

                <Container>

                    <Row>
                        <Col xs="3" style={style}>
                            <div><h4>buttons</h4></div>
                            <hr />
                            <p>List of IM contancts</p>
                        </Col>
                        <Col style={style}>
                            <p>Chatroom component</p>
                        </Col>
                    </Row>

                </Container>

            </div>

        );

    }

}