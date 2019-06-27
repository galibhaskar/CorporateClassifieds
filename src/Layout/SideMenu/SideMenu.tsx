import React,{Component} from 'react';
import { Link } from "react-router-dom";
import 'office-ui-fabric-react/dist/css/fabric.css';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import { initializeIcons } from '@uifabric/icons';
import './SideMenu.sass';
import { connect } from "react-redux";

initializeIcons();
class SideMenu extends Component<any,any>
{
    render()
    {
        return(
            
            <div className="sidebar">
            <nav> 
                <Link to="/Classifieds/SaleRent" className="menu">
                  <span className="sidebar-link-icon">
                      <Icon iconName="Shop"/>
                    </span>
                    <span className="sidebar-link-text">
                      Classifieds
                    </span>
                </Link>
                
                <Link to="/MyClassifieds/ActiveClassifieds" className="menu">
                    <span className="sidebar-link-icon">
                      <Icon iconName="Shop"/>
                    </span>
                    <span className="sidebar-link-text">
                      My Classifieds
                    </span>
                </Link>
                
                <Link to="/Inbox/Offers" className="menu">
                    <span className="sidebar-link-icon">
                     <Icon iconName="MailSolid"/>
                    </span>
                    <span className="sidebar-link-text">
                      Inbox
                    </span>
                </Link>
                
                <Link to="/Admin" className="menu">
                    <span className="sidebar-link-icon">
                      <Icon  iconName="SecurityGroup"/>
                    </span>
                    <span className="sidebar-link-text">
                      Admin
                    </span>
                </Link>
      
            </nav>
          </div>
          
                
           
        );
    }
}
function mapStateToProps(state:any)
{
    return{
    user:state.user
    }
}
export default connect(mapStateToProps)(SideMenu);





