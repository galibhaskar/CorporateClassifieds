import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card } from 'react-bootstrap';
import { Icon } from 'react-icons-kit';
import { ic_arrow_back } from 'react-icons-kit/md/ic_arrow_back';
import { PrimaryButton } from 'office-ui-fabric-react';
import Icons from 'react-icons-kit';
import { ic_phone_android } from 'react-icons-kit/md/ic_phone_android';
import '../../../MyClassifeds/CreateAd/Personinfo.sass';
import '../../../MyClassifeds/CreateAd/Imageslide.sass';
import './ViewAd.sass';
import { changeDisplayAd } from '../../../Actions/AdActions';


class ViewAd extends Component<any, any> {

    constructor(props: any) {
        super(props);
        props.AdItem.images[0] == null ?
            this.state = {
                StartIndex: 0
            } :
            this.state = {
                imgsrc: props.AdItem.images[0].image,
                StartIndex: 0
            };
        var url: string = this.props.path + props.AdItem.id;
        window.location.href = url;
    }

    componentWillUnmount = () => {
        this.props.dispatch(changeDisplayAd(0));
    }

    Back = () => {
        this.props.dispatch(changeDisplayAd(0));
    }


    public DisplayImage(details: any) {
        this.setState(
            this.state = { imgsrc: details.image }
        );
        console.log(this.state);
    }
    render() {
        debugger;
        return (
            <div className="ms-Grid-row ViewAdMainDiv">
                <div className="ms-Grid-row">
                    <div className="ms-Grid-col ms-lg12 PostAdBackToList" onClick={this.Back.bind(this)}>
                        <p>
                            <Icon icon={ic_arrow_back} size={32} className="BackArrow" />
                            Back to List
                        </p>
                    </div>
                </div>
                <div className="Details">
                    <div className="ms-Grid-col  ms-lg7">

                        <div className="ms-Grid-row ViewAdDetailsMainDiv">
                            <Card>
                                <div className='ProdImgView'>
                                    {

                                        this.props.AdItem.images[0] == null ?
                                            <img className='prodimg' src="https://capitant.be/wp-content/themes/capitant/assets/images/no-image.png" alt="Ad" /> :
                                            <img src={"data:image/jpeg;base64," + this.state.imgsrc} alt="avengers" className='prodimg' />
                                    }
                                    {/* <img src={"data:image/jpeg;base64," + this.state.imgsrc} alt="avengers" className='prodimg' /> */}

                                    <div className="prodprice">
                                        <p className="prodpriceP"><i className="fas fa-rupee-sign"></i>{this.props.AdItem.price}</p>
                                    </div>
                                </div>
                            </Card>

                            <div className="ms-Grid-row asd">
                                <Card>
                                    <div className="ImageslideMainDiv"
                                        style={{
                                            transform: `translate(-${100 * (this.state.StartIndex / 4)}%)`,
                                            gridTemplateColumns: `repeat(${this.props.AdItem.images.length},${100 / 4}%)`,
                                        }}>
                                        {this.props.AdItem.images.map((item: any, index: number) => <div className="item ">
                                            <div><img src={"data:image/jpeg;base64," + item.image} className="img-responsive" height={128} width={128} onClick={() => { this.DisplayImage(item) }} /></div>
                                        </div>)}

                                    </div>
                                    <a href="#theCarousel" className="left carousel-control left" onClick={() => { this.setState({ StartIndex: this.state.StartIndex - 4 }) }}>
                                        <i className="fas fa-chevron-left ChevronIcon"></i>
                                    </a>
                                    <a href="#theCarousel" className="right carousel-control right" onClick={() => { this.setState({ StartIndex: this.state.StartIndex + 4 }) }}>
                                        <i className="fas fa-chevron-right ChevronIcon"></i>
                                    </a>
                                </Card>
                            </div>
                            <Card>
                                <div className="CarddescMaindiv">
                                    <div className="ms-Grid-row">
                                        <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg4 ">
                                            <h3 className="productNameInAdView">{this.props.AdItem.name}</h3>
                                        </div>
                                        <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg5">

                                        </div>
                                        <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg1">
                                            <i className="fas fa-share-alt ShareIconInAdView text-muted"></i>
                                        </div>
                                        <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg1">
                                            <p className="offersCount text-muted"><i className="fas fa-hand-holding-usd OfferIconInAdView text-muted"></i>{this.props.AdItem.offersCount}</p>
                                        </div>
                                        <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg1">
                                            <p className="offersCount text-muted"><i className="fas fa-eye ViewIconInAdView text-muted"></i>{this.props.AdItem.views}</p>
                                        </div>
                                    </div>
                                    <div className="ms-Grid-row">
                                        <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg6">
                                            <p className='text-muted productCatInAdView'><i className="fas fa-rupee-sign"></i>{this.props.AdItem.price}</p>
                                        </div>
                                    </div>
                                    <div className="ms-Grid-row">
                                        <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg12">
                                            <p className="productdescInAdView">
                                                {this.props.AdItem.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </Card>
                        </div>
                    </div>
                    <div className="ms-Grid-col ms-sm6 ms-md8 ms-lg5">
                        <div className="ms-Grid-col ms-sm6 ms-md8 ms-lg12 PersonInfoDiv">
                            <div className="card PersoninfoMainDiv">
                                <div>
                                    <div className="ms-Grid-row">
                                        <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg6">
                                            <h5 className='publish'>Published by</h5>
                                        </div>
                                        <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg2"></div>
                                        <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg4">
                                            {!this.props.PostAdPersonInfo == true &&
                                                <h6 className="text-muted postdate">18 April,2019</h6>
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="ms-Grid-row">
                                        <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg1">
                                            {/* <img width={32} height={32} alt="propic" className="img-circle propic" src={"data:image/jpeg;base64," + this.props.AdItem.images[0].image} alt="" /> */}
                                        </div>
                                        <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg10 PersonInfoPronameCol">
                                            <p className="proname">Vamsea</p>
                                        </div>
                                    </div>
                                    <div className="ms-Grid-row PersonInfoContactDetails">
                                        <div className="ms-Grid-row">
                                            <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg2">
                                                <i className="fas fa-map-marker-alt locicon">
                                                </i>
                                            </div>
                                            <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg4">
                                                <p className="postownlocation">KPHB, Hyderbad</p>
                                            </div>
                                            <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg2">
                                                <i className="fas fa-envelope mailicon"></i>
                                            </div>
                                            <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg4">
                                                <p className="postownmail">abcdef@gh.com</p>
                                            </div>

                                        </div>
                                        <div className="ms-Grid-row">
                                            <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg2">
                                                <Icons icon={ic_phone_android} className='phoneicon'></Icons>
                                            </div>
                                            <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg4">
                                                <p className="postownnumber">1234567890</p>
                                            </div>


                                            <div>
                                                <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg2">
                                                    <i className="far fa-clock expireicon"></i>
                                                </div>
                                                <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg4"   >
                                                    <p className="postexpiredate">878258/4537</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="ms-Grid-row">
                                        <div className="ms-Grid-col ms-sm4"></div>
                                        <div className="ms-Grid-col ms-sm8">
                                            <div className="ms-Grid-col ms-sm1"></div>
                                            <div className="ms-Grid-col ms-sm4">
                                                <PrimaryButton className="Reportbutton" text="Report" allowDisabledFocus={true} />

                                            </div>
                                            <div className="ms-Grid-col ms-sm6">
                                                <PrimaryButton className="Offeradbutton" text="Make an Offer" allowDisabledFocus={true} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state: any) {
    debugger;
    return {
        AdItem: state.AdReducer.Ad[0]
    };
}

export default connect(mapStateToProps, undefined)(ViewAd);