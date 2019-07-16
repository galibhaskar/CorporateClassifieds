import React from 'react';
import { connect } from 'react-redux';
import { ValidateCredentials } from '../Actions/UserActions';
import './Authentication.sass';
import logo from "../Images/logo2.png";
import { Card } from 'react-bootstrap';
import { Icon, initializeIcons, TextField, PrimaryButton } from 'office-ui-fabric-react';
import Classifiedsbg from '../Images/Classifiedsbg.jpg';
import App from '../App';
import ServerError from '../ErrorPages/ServerError';

initializeIcons();
class Authentication extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      Username: '',
      Password: ''
    }
  }
  handleChange(e: any) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleClick() {
    let credentials = this.state;
    this.props.dispatch(ValidateCredentials(credentials));
    console.log(credentials);
    this.setState({ Username: '', Password: '' });
  }
  handlePress(e:any){
    if(e.keyCode==13){
      let credentials = this.state;
    this.props.dispatch(ValidateCredentials(credentials));
    this.setState({ Username: '', Password: '' });
    }
  }
  render() {
    return (
      <div className="Authentication" onKeyDown={this.handlePress.bind(this)}>
        {!this.props.UserLoggedIn ? <Card className="AuthenticationCard" border="dark" style={{ width: '18rem' }}>
          <Card.Header>
            <Card.Title>
              Corporate Classifieds
            </Card.Title>
          </Card.Header>
          <Card.Body>
            {/* <img className="Classifiedsbg" src={Classifiedsbg} alt="bg"/> */}

            <Card.Img src={logo} />
            {this.props.UserLogInError && <Card.Text className="WrongCredentials">Enter valid credentials</Card.Text>}
            <Card.Text>
              <TextField label="Username" name="Username" value={this.state.Username} required onChange={this.handleChange.bind(this)} />
              <TextField type="Password" label="Password" name="Password" value={this.state.Password} required onChange={this.handleChange.bind(this)} />
              <PrimaryButton text="Login" onClick={this.handleClick.bind(this)} />
            </Card.Text>
          </Card.Body>
        </Card> :
          <App />}
      </div>



    );
  }
}

function mapStateToProps(state: any) {
  debugger;
  return {
    User: state.UserReducer.User,
    UserLoggedIn: state.UserReducer.UserLoggedIn,
    UserLogInError: state.UserReducer.UserLogInError
  }
}

export default connect(mapStateToProps)(Authentication);