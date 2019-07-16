import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dropzone from 'react-dropzone';
import { DefaultButton, Label, TextField, PrimaryButton } from 'office-ui-fabric-react';
import { Card } from 'react-bootstrap';
import './Register.sass';
import DefaultProfilePic from '../Images/DefaultProfilePic.png';
import UserReducer from '../Reducers/UserReducer';
const imageMaxSize = 10000000 // bytes
const acceptedFileTypes = 'image/x-png, image/png, image/jpg, image/jpeg, image/gif'


const acceptedFileTypesArray = acceptedFileTypes.split(",").map((item) => { return item.trim() })
var sortedImgFiles = new Array();
class Register extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            UserName: '',
            password: '', User: { name: "", email: "", phone: "", location: "", Picture: [] }
        }
    }
    handleClick() {
        alert("dfsafs");
        console.log(this.state);
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
                        // let a = myResult.split(',')[1];
                        // var bytes=this._base64ToArrayBuffer(a);
                        // debugger;
                        // console.log(byte);
                        this.setState({
                            User: {
                                Picture: myResult
                            }
                            // Images: [...this.state.Images, { image: a }],
                            // //Images:[...this.state.Images,bytes],
                            // imgsrc: myResult
                        })

                    }, false)

                    myFileItemReader.readAsDataURL(currentFile)

                })

            }
        }
    }
    render() {
        return (
            <div className="Registration">
                <Card className="RegisterCard" border="dark" style={{ width: '18rem' }}>
                    <Card.Header>
                        <Card.Title>
                            Corporate Classifieds
                        </Card.Title>
                    </Card.Header>
                    <Card.Body>

                        <Dropzone onDrop={this.handleOnDrop} accept={acceptedFileTypesArray} maxSize={imageMaxSize}>
                            {({ getRootProps, getInputProps }) => (
                                <section>
                                    <div {...getRootProps()}>
                                        <input {...getInputProps()} />
                                        <div className="ms-Grid-row PostAdImage">
                                            <div className="ms-Grid-row pos">
                                                <div className="ms-Grid-col ms-sm12 profilePic">
                                                    {this.state.User.Picture.length == 0 ? <div>
                                                        <img width={128} height={128} src={DefaultProfilePic} alt="ad" />

                                                        <i className="fas fa-plus"></i>
                                                        {/* <DefaultButton text="+Add images" allowDisabledFocus={true} /> */}
                                                    </div>
                                                        : <img width={128} height={128} src={this.state.User.Picture} alt="ad" />}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </section>
                            )}
                        </Dropzone>

                        <TextField
                            label="User Name"
                            name="UserName" placeholder="enter your username"
                            onChange={(event, newValue) => this.setState({ UserName: newValue })}
                        />
                        <br />
                        <TextField
                            type="password"
                            label="Password"
                            name="Password" placeholder="enter your password"
                            onChange={(event, newValue) => this.setState({ password: newValue })}
                        />
                        <br />
                        <TextField
                            label="Name"
                            name="Name" placeholder="enter your name"
                            onChange={(event, newValue) => this.setState({ User: { ...this.state.User,name: newValue } })}
                        />

                        <br />
                        <TextField
                            label="Email"
                            type="email"
                            name="Email" placeholder="enter your email"
                            onChange={(event, newValue) => this.setState({ User: { ...this.state.User,email: newValue} } )}
                        />
                        <br />
                        <TextField
                            type="text"
                            label="Phone"
                            name="Phone" placeholder="enter your phone number"
                            onChange={(event, newValue) => this.setState({ User: { ...this.state.User,phone: newValue } })}
                        />
                        <br />
                        <TextField
                            type="text"
                            label="Location"
                            name="Location" placeholder="enter your location"
                            onChange={(event, newValue) => this.setState({ User: { ...this.state.User,location: newValue } })}
                        />
                        <br />
                        <PrimaryButton text="Signup" primary={true} style={style} onClick={this.handleClick.bind(this)} />
                    </Card.Body>
                </Card>
            </div>
        );
    }
}
const style = {
    margin: 15,
};
export default connect()(Register);