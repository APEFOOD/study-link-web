import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

const style = {
    width: '100%',
	height: '200px',
	backgroundColor: '#8cacea',
	margin: '8px',
}

export default class Reports extends Component {

    render() {

        return (

            <div><br /><br /><br />

                <Container>

                    <Row>
                        <Col xs="3" style={style}>
                            <p>List of subject links</p>
                        </Col>
                        <Col style={style}>
                            <p>Line chart for overall progress</p>
                        </Col>
                    </Row>

                    <Row>
                        <Col style={style} md="12">
                            <p>Switchable subject radar chart</p>
                        </Col>
                    </Row>

                </Container>

            </div>

        );

    }

}