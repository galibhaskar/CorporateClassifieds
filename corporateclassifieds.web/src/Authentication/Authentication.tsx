import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux';
import { ValidateCredentials } from '../Actions/UserActions';
class Authentication extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }
    handleClick() {
        let credentials = this.state;
        this.props.dispatch(ValidateCredentials(credentials));

    }
    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <div>
                        <AppBar
                            title="Login"
                        />
                        <TextField
                            hintText="Enter your Username"
                            floatingLabelText="Username"
                            onChange={(event, newValue) => this.setState({ username: newValue })}
                        />
                        <br />
                        <TextField
                            type="password"
                            hintText="Enter your Password"
                            floatingLabelText="Password"
                            onChange={(event, newValue) => this.setState({ password: newValue })}
                        />
                        <br />
                        <RaisedButton label="Submit" primary={true} style={style} onClick={this.handleClick.bind(this)} />
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}
const style = {
    margin: 15,
};
export default connect()(Authentication);