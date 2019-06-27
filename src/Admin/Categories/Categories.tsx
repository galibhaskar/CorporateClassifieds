import React,{Component} from 'react';
import {Link } from "react-router-dom";
import 'office-ui-fabric-react/dist/css/fabric.css';
import { initializeIcons } from '@uifabric/icons';
import { connect } from "react-redux";

initializeIcons();
class Categories extends Component<any,any>
{
    render()
    {
        return(
            <div className="SaleRent">
                
                <main className="content-wrapper">
                <div className="header">
                    <h1>Categories</h1>
                    <p>Here you can manage categories.</p>

                    <div className="cta-button-panel">
                        <Link to="/AddCategory">
                            <div className="btn btn-primary">
                                + Add Category
                                </div>
                        </Link>
                    </div>
                </div>
                </main>
        </div>
           
        );
    }
}
function mapStateToProps(state:any)
{
    return{
    
    }
}
export default connect(mapStateToProps)(Categories);













