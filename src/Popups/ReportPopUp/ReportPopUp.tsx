import React from 'react';
import { Modal, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import './ReportPopUp.sass';
import { Dropdown, TextField, initializeIcons } from 'office-ui-fabric-react';
import { SubmitReport } from "../../Actions/ReportActions";
import { connect } from 'net';

initializeIcons();

export default class ReportPopUp extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state = {
            show: true
        }
    }
    handleClose() {
        this.setState({ show: false });
    }
    render() {
        return (
            <div className="ReportPopUp">
                <Modal show={this.state.show} onHide={this.handleClose.bind(this)}>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Report
            </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Dropdown
                            label="Category"
                            defaultSelectedKey="Select"
                            options={[
                                { key: 'Vehicles', text: 'Vehicles' },
                                { key: 'Property', text: 'Property' },
                                { key: 'Electronics', text: 'Electronics' },
                                { key: 'Bokks', text: 'Bokks' },

                            ]}
                        />
                        <TextField label="Description" multiline rows={3} />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleClose.bind(this)}>Cancel</Button>
                        <Button onClick={this.props.dispatch(SubmitReport())}>Report</Button>
                    </Modal.Footer>
                </Modal>
            </div >
        );
    }
}

// function mapStateToProps(state: any){
//     return {
//         showSuccess: state.ReportReducer.showSuccess,
//         showError: state.ReportReducer.showError,
//     }
// }
// export default connect(mapStateToProps)(ReportPopUp);