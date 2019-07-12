import React, { Component } from 'react';
import 'office-ui-fabric-react/dist/css/fabric.css';
import { initializeIcons } from '@uifabric/icons';
import { connect } from "react-redux";

initializeIcons();
class Users extends Component<any, any>
{
    render() {
        return (
            <div className="Users">
                <main className="content-wrapper">
                    <div className="header">
                        <h1>Users</h1>
                        <p>Here you can manage users.</p>
                    </div>
                </main>
            </div>

        );
    }
}
function mapStateToProps(state: any) {
    return {

    }
}
export default connect(mapStateToProps)(Users);













