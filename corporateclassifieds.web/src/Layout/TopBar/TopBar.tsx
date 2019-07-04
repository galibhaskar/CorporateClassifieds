import React,{Component} from 'react';
import {Link } from "react-router-dom";
import 'office-ui-fabric-react/dist/css/fabric.css';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import { initializeIcons } from '@uifabric/icons';
import './TopBar.sass';
import { connect } from "react-redux";

initializeIcons();
class TopBar extends Component<any,any>
{
    render()
    {
        return(
            
              <div className="TopBar">
                <Link to="/Classifieds/SaleRent">
                    <div className="Logo">
                        <Icon iconName="ShoppingCart"/>
                    </div>

                    <div className="Title">
                        Corporate Classifieds
                    </div>              
                </Link>
           
                <div className="UserOptions">
                    <div className="username">
                        {/* { this.props.user.name } */}
                        Surya
                    </div>
                    <Link to="Profile">
                        {/* <img
                            src={"data:image/jpeg;base64," +this.props.user.picture}
                            alt={this.props.user.name }/> */}
                        <img src="https://qph.fs.quoracdn.net/main-qimg-0edd1a2156194a28f996b6add2d2ff84" alt="user"/>
                    </Link>
                </div>    
                </div> 
                
           
        );
    }
}
function mapStateToProps(state:any)
{
    
    return{
    //user:state.AdReducer.Ads[0].createdByUser
    }
}
export default connect(mapStateToProps)(TopBar);