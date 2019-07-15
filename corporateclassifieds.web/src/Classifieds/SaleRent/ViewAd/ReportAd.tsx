import React, { Component } from 'react';
import { Card, Button, CardHeader, CardBody } from 'reactstrap';
import { TextField } from 'office-ui-fabric-react';
import './ReportAd.sass';
import { connect } from 'react-redux';
import { SubmitReport } from '../../../Actions/ReportActions';
interface Ireport{
    ReportDesc: string,
    ReportedBy : IUser,
    AdId : number,
    ReportCat: string
}
interface IUser{
    ID: number
}
class ReportAd extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {  ReportDesc : "", ReportedBy: {Id: 4}, ReportCat: "" };
    }
    change(e: any) {
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        );
    }
    submit = () =>{
        let report: Ireport = {ReportDesc: "", ReportedBy: {ID: 4}, AdId: 0, ReportCat: "" };
        report.ReportDesc = this.state.Description;
        report.ReportedBy.ID = this.state.ReportedBy.Id;
        report.AdId = this.props.Adid;
        report.ReportCat = this.state.ReportCat;
        debugger;
        this.props.dispatch(SubmitReport(report));    
        this.setState({
           ReportDesc : "", ReportedBy: {Id: 4}
        })
    }
    render() {
        return (
            <div className="ReportAdMainDiv">
                <div className="ReportAdInnerDiv">
                    <Card>
                        <CardHeader>
                            <h5 className="title">Report</h5>
                            <i className="fas fa-times closeIcon" onClick={() => { this.props.viewReport() }}></i>
                        </CardHeader>
                        <CardBody>
                            <div className="inputFieldsWrapper">
                                <p className="text-muted">Report Category</p>
                                <select className="ms-Dropdown-select" onChange = {this.change.bind(this)} name = "ReportCat">
                                    <option>Select</option>
                                    <option>Fake Product</option>
                                    <option>Irrelavent Post</option>
                                    <option>Abuse Content</option>
                                </select>
                                <TextField label="Description" placeholder="Describe the Report here..." className='RSeportAdDesc' type="textarea" multiline rows={3} value = {this.state.Description} name="Description" onChange = {this.change.bind(this)} />
                            </div>
                            <Button className="reportButton" onClick = {() => {this.submit()}}>Report</Button>
                            <Button className="cancelButton" onClick={() => { this.props.viewReport() }}>cancel</Button>
                        </CardBody>
                    </Card> 
                </div>
            </div>
        );
    }
}

export default connect(undefined)(ReportAd);