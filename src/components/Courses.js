import React, { Component } from 'react';

const style = {
    width: '100%',
	height: '200px',
	backgroundColor: '#8cacea',
	margin: '8px',
}


export default class Courses extends Component {

    render() {

        return (

            <div><br /><br /><br />

                <div className="container">
                    <div className="row">
                        <div className="col-3" style={style}>
                            <div><h4 className="text-center">List icon and book icon</h4></div>
                            <div>
                                <p>List of all modules</p>
                            </div>
                        </div>
                        <div className="col" style={style}>
                            <p>
                                TL Image
                            </p>
                        </div>
                    </div>
                </div>

            </div>

        );

    }

}