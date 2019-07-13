import React, { Component } from 'react';
import 'office-ui-fabric-react/dist/css/fabric.css';
import { initializeIcons } from '@uifabric/icons';
import { connect } from "react-redux";
import { Card, Table, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Checkbox } from 'office-ui-fabric-react';
import { FetchUsers } from '../../Actions/UserActions';
import './Users.sass';

initializeIcons();
class Users extends Component<any, any>
{
    componentWillMount() {
        debugger;
        this.props.dispatch(FetchUsers());
    }
    render() {
        return (
            <div className="Users">
                <main className="content-wrapper">
                    <div className="header">
                        <h1>Users</h1>
                        <p>Here you can manage users.</p>
                    </div>

                    <div className="Users">
                        <Card className="UsersList">
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th className="Profile">Profile</th>
                                        <th className="Name" >Name</th>
                                        <th className="Email">Email</th>
                                        <th className="Phone">Phone</th>
                                        <th className="Location">Location</th>
                                        <th className="IsActive">IsActive</th>
                                        <th className="Permission">Act as Admin</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.props.Users.map((User: any) =>

                                        <tr>
                                            <td className="Profile">
                                                {User.Picture != null ?
                                                    <img className="ListProductImage" src={`data:image/jpeg;base64,${User.Picture}`} alt="Ad" /> :
                                                    <img className="ListProductImage" src="https://capitant.be/wp-content/themes/capitant/assets/images/no-image.png" alt="Ad" />
                                                }</td>
                                            <td className="Name">{User.name.trim()}</td>
                                            <td className="Email">{User.email.trim()}</td>
                                            <td className="Phone">{User.phone}</td>
                                            <td className="Location">{User.location}</td>
                                            <td className="IsActive">
                                                <Checkbox name="mandatory" styles={{ root: { width: 150 } }} checked={User.isActive} />
                                            </td>
                                            <td className="Permission">
                                                <Checkbox name="mandatory" styles={{ root: { width: 150 } }} checked={User.permission} />
                                            </td>


                                        </tr>

                                    )}

                                </tbody>
                            </Table>

                            {/* {this.state.removeUser && <RemoveUser UserID={this.state.Userid} RemoveUserStatus={this.RemoveUserStatus.bind(this)} />}
                            {this.state.UpsertUser && <UpsertUser UserID={this.state.Userid} UpsertUserStatus={this.UpsertUserStatus.bind(this)} />}
                            {this.state.AddUser && <UpsertUser UserID={0} UpsertUserStatus={this.AddUserStatus.bind(this)} />} */}

                        </Card>
                    </div>


                </main>
            </div>

        );
    }
}
function mapStateToProps(state: any) {
    debugger;
    return {
        Users: state.UserReducer.Users
    }
}
export default connect(mapStateToProps)(Users);













