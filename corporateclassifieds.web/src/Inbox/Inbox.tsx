import React, { Component } from "react";
import { connect } from "react-redux";
import "./Inbox.sass";
import { Card, ListGroup } from "react-bootstrap";
import { Route } from "react-router";
import Offers from "./Offers/Offers";
import Reports from "./Reports/Reports";
import { Link } from "react-router-dom";
import Expired from "./Expired/Expired";
import Deleted from "./Deleted/Deleted";
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import { fetchUserOffers } from "../Actions/OffersActions";
class Inbox extends Component<any, any>{
    componentDidMount() {
        this.props.dispatch(fetchUserOffers(3));
    }
    render() {
        return (
            <div className="Inbox">
                <nav className="top-menu">
                    <ul className="nav">
                        <li className="nav-item" >
                            <Link to="/Inbox/Offers" className="nav-link active">
                                Inbox
                            </Link>
                        </li>
                    </ul>
                </nav>
                <main className="content-wrapper">
                    <div className="header">
                        <h1>Inbox</h1>
                        <p>Here you can manage Ads and Offers.</p>
                    </div>

                    <div>

                    </div>
                </main>

                <div className="InboxLeft">
                    <Card>
                        <Card.Header>
                            Pending Tasks
                        </Card.Header>

                        <ListGroup >
                            <Link to="/Inbox/Offers">
                                <ListGroup.Item >

                                    <Icon iconName="Delete" />
                                    <span>Offers(0)</span>

                                </ListGroup.Item>
                            </Link>
                            <Link to="/Inbox/Reports">
                                <ListGroup.Item>

                                    <Icon iconName="Warning" />
                                    <span>Reports(0)</span>

                                </ListGroup.Item>
                            </Link>
                            <Link to="/Inbox/Expired">
                                <ListGroup.Item>

                                    <Icon iconName="BufferTimeBoth" />
                                    <span>Ad Expired(0)</span>

                                </ListGroup.Item>
                            </Link>
                            <Link to="/Inbox/Deleted">
                                <ListGroup.Item>

                                    <Icon iconName="Delete" />
                                    <span>Deleted(0)</span>

                                </ListGroup.Item>
                            </Link>
                        </ListGroup>
                    </Card>

                </div>
                <div className="InboxRight">
                    <Route path="/Inbox/Offers" component={Offers} />
                    <Route path="/Inbox/Reports" component={Reports} />
                    <Route path="/Inbox/Expired" component={Expired} />
                    <Route path="/Inbox/Deleted" component={Deleted} />
                </div>
            </div>

        );
    }
}
function mapStateToProps(state: any) {
    return {
        Ads: state.AdReducer.Ads
    }
}
export default connect(mapStateToProps)(Inbox);