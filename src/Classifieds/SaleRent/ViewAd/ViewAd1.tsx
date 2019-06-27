import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../../../../node_modules/react-bootstrap/Card';
// import { browserHistory } from 'react-router';
// import { fetchAdsById } from '../../../Actions/AdActions';

class ViewAd extends Component<any, any> {

    constructor(props: any) {
        super(props);
        debugger;
        // this.props.dispatch(fetchAdsById(83));
        this.state = {
            imgsrc: this.props.AdItem.images[0].image,
            StartIndex: 0
        };
        var url: string = "/Classifieds/SaleRent#" + this.props.AdItem.id;
        // browserHistory.push(url);
        window.location.href=url;
    }
    // componentWillMount(){
    //     debugger;
    //     this.props.dispatch(fetchAdsById(83));
    // }


    public DisplayImage(details: any) {
        this.setState(
            this.state = { imgsrc: details.image }
        );
        console.log(this.state);
    }
    render() {
        debugger;
        return (
            // <h1>data rendered</h1>
            <div className="ms-Grid-row ViewAdMainDiv">

                <Card>
                    <div className='ProdImgView'>
                        <img src={this.state.imgsrc} alt="avengers" className='prodimg' />

                        <div className="prodprice">
                            <p className="prodpriceP"><i className="fas fa-rupee-sign"></i>{this.props.AdItem.price}</p>
                        </div>
                    </div>
                </Card>

                <div className="ms-Grid asd">
                    <Card>
                        <div className="ImageslideMainDiv"
                            style={{
                                transform: `translate(-${100 * (this.state.StartIndex / 4)}%)`,
                                gridTemplateColumns: `repeat(${this.props.AdItem.images.length},${100 / 5}%)`,
                            }}>
                            {this.props.AdItem.images.map((item: any, index: number) => <div className="item ">
                                <div className=""><img src={item.image} className="img-responsive" height={128} width={128} onClick={() => { this.DisplayImage(item) }} /></div>
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
                                <p className="offersCount text-muted"><i className="fas fa-eye ViewIconInAdView text-muted"></i>{this.props.AdItem.commentsCount}</p>
                            </div>
                        </div>
                        <div className="ms-Grid-row">
                            <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg6">
                                <p className='text-muted productCatInAdView'><i className="fas fa-rupee-sign"></i>{this.props.AdItem.price}</p>
                            </div>
                        </div>
                        <div className="ms-Grid-row">
                            <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg12">
                                <p className="productdescInAdView">{this.props.AdItem.description}{this.props.AdItem.description}{this.props.AdItem.description}</p>
                            </div>
                        </div>
                    </div>

                </Card>

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