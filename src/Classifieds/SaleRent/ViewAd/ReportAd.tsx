import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

class ReportAd extends Component {
    constructor(props:any) {
        super(props);
        this.state = { };
    }
    render() {
        return (
            <div className="ReportMainDiv">
                <div className="ReportInnerDiv">
                    <Card>
                        <Card.Header>
                            <h5>Report<i className="fas fa-times"></i></h5>
                        </Card.Header>
                        <Card.Body>
                            
                        </Card.Body>
                    </Card>

                </div>
            </div>
        );
    }
}

export default ReportAd;