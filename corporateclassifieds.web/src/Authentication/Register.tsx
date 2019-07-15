import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux';
import Dropzone from 'react-dropzone';
import { DefaultButton, Label } from 'office-ui-fabric-react';
const imageMaxSize = 10000000 // bytes
const acceptedFileTypes = 'image/x-png, image/png, image/jpg, image/jpeg, image/gif'
const acceptedFileTypesArray = acceptedFileTypes.split(",").map((item) => { return item.trim() })
var sortedImgFiles = new Array();
class Register extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: '', imgToBeUploaded: [], Images: []
        }
    }
    handleClick() {
        alert("dfsafs");
    }
    verifyFile = (files: any) => {
        if (files && files.length > 0) {

            files.map((item: any) => {
                // debugger;
                const currentFile = item
                const currentFileType = currentFile.type
                const currentFileSize = currentFile.size
                if (currentFileSize > imageMaxSize) {
                    alert("This file is not allowed. " + currentFileSize + " bytes are too large")
                    return false
                }
                if (!acceptedFileTypesArray.includes(currentFileType)) {
                    alert("This file is not allowed. Only images are allowed.")
                    return false
                }
                else {
                    sortedImgFiles.push(item);
                    return true
                }
            })

            return true;
        }
    }

    handleOnDrop = (files: any, rejectedFiles: any) => {
        if (rejectedFiles && rejectedFiles.length > 0) {
            this.verifyFile(rejectedFiles)
        }

        if (files && files.length > 0) {
            const isVerified = this.verifyFile(files)
            if (isVerified === true) {
                // imageBase64Data 
                files.map((item: any) => {
                    let currentFile: any = item
                    let myFileItemReader = new FileReader()
                    let myResult: any
                    myFileItemReader.addEventListener("load", () => {
                        // console.log(myFileItemReader.result)
                        myResult = myFileItemReader.result;
                        let a = myResult.split(',')[1];
                        // var bytes=this._base64ToArrayBuffer(a);
                        // debugger;
                        // console.log(byte);
                        this.setState({
                            imgToBeUploaded: [...this.state.imgToBeUploaded, myResult],
                            Images: [...this.state.Images, { image: a }],
                            //Images:[...this.state.Images,bytes],
                            imgsrc: myResult
                        })

                    }, false)

                    myFileItemReader.readAsDataURL(currentFile)

                })

            }
        }
    }
    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <div>
                        <AppBar
                            title="Register"
                        />
                        <TextField
                            hintText="Enter your First Name"
                            floatingLabelText="First Name"
                            onChange={(event, newValue) => this.setState({ first_name: newValue })}
                        />
                        <br />
                        <TextField
                            hintText="Enter your Last Name"
                            floatingLabelText="Last Name"
                            onChange={(event, newValue) => this.setState({ last_name: newValue })}
                        />
                        <br />
                        <TextField
                            hintText="Enter your Email"
                            type="email"
                            floatingLabelText="Email"
                            onChange={(event, newValue) => this.setState({ email: newValue })}
                        />
                        <br />
                        <TextField
                            type="password"
                            hintText="Enter your Password"
                            floatingLabelText="Password"
                            onChange={(event, newValue) => this.setState({ password: newValue })}
                        />
                        <br />
                        <TextField
                            type="number"
                            hintText="Enter your Phone Number"
                            floatingLabelText="Phone"
                            onChange={(event, newValue) => this.setState({ phone: newValue })}
                        />
                        <br />
                        <TextField
                            type="text"
                            hintText="Enter your Location"
                            floatingLabelText="Location"
                            onChange={(event, newValue) => this.setState({ location: newValue })}
                        />
                        <br />
                        <Dropzone onDrop={this.handleOnDrop} accept={acceptedFileTypesArray} maxSize={imageMaxSize}>
                            {({ getRootProps, getInputProps }) => (
                                <section>
                                    <div {...getRootProps()}>
                                        <input {...getInputProps()} />
                                        <div className="ms-Grid-row PostAdImage">
                                            <div className="ms-Grid-row pos">
                                                <div className="ms-Grid-col ms-sm12">
                                                    <img width={128} height={128} alt="ad" />
                                                    <div>
                                                        <DefaultButton text="+Add images" allowDisabledFocus={true} />
                                                        <Label>(optional)</Label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </section>
                            )}
                        </Dropzone>
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
export default connect()(Register);