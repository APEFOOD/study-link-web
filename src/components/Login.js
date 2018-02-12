import React, { Component } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

export default class Login extends Component {

    logUserIn = () => {
        console.log('User signed in');
    }

    render() {

        return (

            <div><br /><br /><br /><br />

                <Container>
                    <Row>
                        <Col>
                            <Form>

                                <FormGroup row>
                                    <Label for="email" sm={2}>Email</Label>
                                    <Col xs={7}>
                                        <Input type="email" name="email" id="email" placeholder="Enter email address" />
                                    </Col>
                                </FormGroup>    

                                <FormGroup row>
                                    <Label for="password" sm={2}>Password</Label>
                                    <Col xs={7}>
                                        <Input type="password" name="password" id="password" placeholder="Enter password" />
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Col xs={2}></Col>
                                    <Col xs={7}>
                                        <Button color="primary" onClick={this.logUserIn} block>Sign In</Button>
                                    </Col>
                                </FormGroup>

                            </Form>
                        </Col>
                    </Row>
                </Container>

            </div>

        );

    }

}