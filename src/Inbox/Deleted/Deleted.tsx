import React from 'react';
import { Card, ListGroup, InputGroup, FormControl } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { Route } from 'react-router';
import MessageList from '../MessageList';
import Icon from 'react-icons-kit';
import { fetchUserAds } from '../../Actions/AdActions';
class Deleted extends React.Component<any,any>{
    componentDidMount(){
        //this.props.dispatch(fetchUserAds(2, "Active", this.props.ActiveAds.length));    /////////user id need to be given in the first field when authentication is added
    }
    render(){
        return(
            <Card className="Offers" >
                <Card className="Left">
                    <Card.Header>
                        Deleted
                    </Card.Header>
                    <Card.Body>
                        <ListGroup >
                            <Link to="/Inbox/Deleted/Yamaha">
                                <ListGroup.Item className="OfferItem">
                                    <Card.Img className="OfferImage" variant="top" src="https://capitant.be/wp-content/themes/capitant/assets/images/no-image.png" />
                                    <Card.Body className="OfferDescription">
                                        <Card.Header className="OfferName">Yamaha R15</Card.Header>
                                        <Card.Text className="OfferTime">Timestamp</Card.Text>
                                        <Card.Text className="OfferAmount">Deleted</Card.Text>
                                    </Card.Body>
                                </ListGroup.Item>
                            </Link>
                            <Link to="/Inbox/Deleted/Avengers">
                                <ListGroup.Item className="OfferItem">
                                    <Card.Img className="OfferImage" variant="top" src="https://capitant.be/wp-content/themes/capitant/assets/images/no-image.png" />
                                    <Card.Body className="OfferDescription">
                                        <Card.Header className="OfferName">Avengers Tickets</Card.Header>
                                        <Card.Text className="OfferTime">Timestamp</Card.Text>
                                        <Card.Text className="OfferAmount">Deleted</Card.Text>
                                    </Card.Body>
                                </ListGroup.Item>
                            </Link>
                        </ListGroup>
                    </Card.Body>
                </Card>
                <Route exact path="/Inbox/Deleted/Yamaha" component={() =>
                    <Card className="Right">
                        <Card.Title>
                            <div>
                                <Card.Img className="Profile" variant="top" src="https://capitant.be/wp-content/themes/capitant/assets/images/no-image.png" />
                                <div className="UserName">{"this.props.item.createdByUser.name"}</div>
                                <div className="MoreOptions"></div>
                            </div>
                        </Card.Title>
                        <Card.Body>
                           <Card.Text>about the report </Card.Text>
                        </Card.Body>
                        
                    </Card>} />
            </Card>
        );
    }
}
export default Deleted;