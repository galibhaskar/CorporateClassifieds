import React, { Component } from 'react';
import { Link } from "react-router-dom";
import 'office-ui-fabric-react/dist/css/fabric.css';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import { initializeIcons } from '@uifabric/icons';
import { connect } from "react-redux";
import { Card } from 'react-bootstrap';
import './Profile.sass';

initializeIcons();
class SideMenu extends Component<any, any>
{
  constructor(props: any) {
    super(props);
    this.state = { selectedMenuID: 'Classifieds' }
  }
  Active(e: any) {
    this.setState({ selectedMenuID: e.currentTarget.id });
    // document.getElementById(this.state.selectedMenuID).className="menu";
  }
  render() {
    return (

      <div className="Profile">
        <nav className="top-menu">
          <ul className="nav">
            <li className="nav-item" >
              <Link to="/Profile" className="nav-link active">
                Profile
              </Link>
            </li>
          </ul>
        </nav>
        <main className="content-wrapper">
          <div className="header">
            <h1>User Profile</h1>
            <p>Here you can view the details of the user.</p>
          </div>
          
        </main>
        <Card className="UserProfileCard">
          User Details
          </Card>
      </div>



    );
  }
}
function mapStateToProps(state: any) {
  debugger;
  return {
    IsUser: state.UserReducer.User.permission
  }
}
export default connect(mapStateToProps)(SideMenu);





