import React, { Component } from 'react';
import 'office-ui-fabric-react/dist/css/fabric.css';
import { initializeIcons } from '@uifabric/icons';
import { connect } from "react-redux";
import './ReportedAds.sass';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import NothingHere from '../Images/NothingHere.png';
initializeIcons();
class ReportedLists extends Component<any, any>
{
    render() {
        return (
            <div>
                {this.props.ReportedAds.length ?
                    <div className="ReportedAds">

                        <div className="ms-Grid-row ReportedAdsHeader">
                            <div className="ms-Grid-col ms-sm5">
                                ITEM
                            </div>
                            <div className="ms-Grid-col ms-sm7">
                                <div className="ms-Grid-col ms-sm4">
                                    POSTED BY
                                </div>
                                <div className="ms-Grid-col ms-sm4">
                                    REPORTED BY
                                </div>
                                <div className="ms-Grid-col ms-sm4">
                                    ACTIONS
                                </div>
                            </div>
                        </div>


                        <div>
                            <div className="ms-Grid-row ReportedAdsList">
                                <div className="ms-Grid-col ms-sm5">
                                    <div className="ms-Grid-col ms-sm1.8">
                                        <img className="ListProductImage" src="https://capitant.be/wp-content/themes/capitant/assets/images/no-image.png" alt="Ad" />
                                    </div>
                                    <div className="ms-Grid-col ms-sm6 AdInfo">
                                        <div className="AdName">
                                            <Icon iconName="CellPhone" className="AdIcon" />
                                            <span className="Name">Ad Name</span>
                                        </div>
                                        <div className="AdDescription">
                                            AdDescription
                                </div>
                                    </div>
                                </div>
                                <div className="ms-Grid-col ms-sm7">
                                    <div className="ms-Grid-col ms-sm4 PostedBy">

                                        <div className="PostedByName">
                                            Surya
                                </div>

                                        <div className="PostedOn">
                                            {
                                                new Intl.DateTimeFormat('en-GB', {
                                                    month: 'short',
                                                    day: '2-digit',

                                                }).format(new Date('2019-06-08 14:52:23.123'))
                                            } ,
                                    {
                                                new Intl.DateTimeFormat('en-GB', {
                                                    year: 'numeric'

                                                }).format(new Date('2019-06-08 14:52:23.123'))
                                            }
                                        </div>

                                    </div>

                                    <div className="ms-Grid-col ms-sm4 ReportedBy">

                                        <div className="ReportedUser">
                                            Gali Bhaskar
                                </div>

                                        <div className="ReportedUsersCount">
                                            +2 more
                            </div>

                                    </div>

                                    <div className="ms-Grid-col ms-sm4 RemoveAd">

                                        <div className="btn btn-primary">
                                            Remove Ad
                            </div>

                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>


                    :

                    <img className="NothingHere" src={NothingHere} alt="NothingHere" />
                }



            </div>




        );
    }
}
function mapStateToProps(state: any) {
    debugger;
    return {
        ReportedAds: state.ReportReducer.ReportedAds,
        ReportedAdsError: state.ReportReducer.ReportError
    }
}
export default connect(mapStateToProps)(ReportedLists);













