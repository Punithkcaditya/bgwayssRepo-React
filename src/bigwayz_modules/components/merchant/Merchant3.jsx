/**
 * 
 * @about Merchant3 or this file
 *  Merchant3 or Merchant3 page 
 * 
 */

// lib
import React, { Component } from "react";
// connect to store
import { connect } from "react-redux"
// api services
import {
    _getPackage,
    _savePackage
} from "../../config/api/Api";
// notify
import { notify } from "../../components/common/Toaster";
// loader
import Loader from "../common/Loader";
// inline error
import InlineError from "../common/InlineError";



// Merchant3 classNameNameName
class Merchant3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            package: [],
            setPackageId: '',
            isLoading: true,

        };
    }

    componentDidMount() {
        this.getPackageDetails()

    }

    getPackageDetails = () => {
        try {
            _getPackage()
                .then(resp => {
                    this.setState({ package: resp.result, isLoading: false })
                })
                .catch(err => { })
        }
        catch (err) { }
    }


    // setPackage
    setPackage = (item) => {

        this.setState({ setPackageId: item.main_id })
    }


    handleSubmit = () => {

        try {
            if (this.state.setPackageId == "") {
                alert("*Please select package")
            }
            else {
                this.setState({ isLoading: true })
                _savePackage({
                    package_id: this.state.setPackageId

                })
                    .then(resp => {
                        if (resp.success) {
                            // notify("success", "details saved")
                            notify("success", resp.data)
                            this.setState({ isLoading: false })
                            this.props.history.push("/dashboard")
                        }
                        else {
                            this.setState({ isLoading: false })
                        }

                    })

            }

        } catch (err) { }

    }

    render() {
        return (
            <>
                {this.state.isLoading && <Loader />}
                <section className="list-left">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-1">

                            </div>
                            <div className="col-md-11 col-sm-12">
                                <h2 className="page-title">
                                    <span><svg xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml="preserve" height="25px" width="25px" fill="#444">
                                        <path id="Box-open" d="M63.7588806,31.6450214l-7.0343971-8.2070007l7.0343971-8.2069998  c0.1963005-0.2276001,0.2783051-0.5313005,0.2256012-0.8271999c-0.0527992-0.2959003-0.2364006-0.5517006-0.4990005-0.6971998  l-22.7753983-12.6524c-0.3876991-0.2158-0.8720741-0.1494001-1.1894989,0.1640999l-6.9177017,6.8577003l-6.8547993-6.8548002  c-0.3202991-0.3203-0.8164005-0.3857-1.2080002-0.1582L0.4990837,14.9810209  c-0.2802,0.1620998-0.4648,0.4502001-0.4950767,0.7733994c-0.0293232,0.3232012,0.0995768,0.6397009,0.3456767,0.8506002  l8.1463232,6.9822998l-7.0301232,9.3732014c-0.1738,0.2304001-0.2383,0.5252991-0.1777,0.8085976  c0.0596,0.2821999,0.2392,0.5244026,0.4922,0.6650009l7.0041003,3.891201  c-0.0300007,0.0951996-0.0598001,0.1912003-0.0598001,0.296299v9.2509995c0,1.2215996,0.6571999,2.3613014,1.7167997,2.9756012  l20.3495979,11.7480011c0.547924,0.3153992,1.1612015,0.4735985,1.7754002,0.4735985  c0.0060005,0,0.0117989-0.0010986,0.0177994-0.0010986c0.0055008,0,0.0100021,0.0030975,0.0153999,0.0030975  c0.010601,0,0.0194016-0.0056992,0.0298996-0.0060997c0.5931015-0.010498,1.1842003-0.1648979,1.7133026-0.4694977  l20.2871246-11.7129021c1.0966721-0.6348,1.7782745-1.8163986,1.7782745-3.0820007v-10.305397l7.1133003-4.3470001  c0.25-0.1533012,0.4208984-0.4082031,0.4657974-0.6972008C64.0332794,32.1626205,63.9502831,31.8667202,63.7588806,31.6450214z   M31.5996838,34.3737221L11.8424835,23.3972206l19.7572002-12.0739002V34.3737221z M33.5996819,11.2827206l19.8236008,12.1145  L33.5996819,34.4107208V11.2827206z M40.3955841,3.1675208l21.0478973,11.6924l-6.2397003,7.280901L34.2020836,9.3067207  L40.3955841,3.1675208z M24.8770828,3.1782207l6.1504993,6.1506004L9.9556837,22.2058201l-7.2339001-6.2003994L24.8770828,3.1782207  z M10.1340837,24.735321l20.9680977,11.6492004L24.7607822,44.91362L3.7540069,33.2427216L10.1340837,24.735321z   M11.4424839,49.1167221c-0.4424-0.2568016-0.7178001-0.7334023-0.7178001-1.2441025v-8.4692993l13.8310986,7.6841011  c0.1533012,0.0849991,0.3193016,0.1259995,0.4843006,0.1259995c0.3077011,0,0.6093998-0.1416016,0.8038006-0.4033012  l5.7558002-7.7420006v21.6858025L11.4424839,49.1167221z M54.4082832,47.8013191  c0,0.5547028-0.2988014,1.0722008-0.7792778,1.3506012L33.5996819,60.7161217V39.0463219l5.8251991,7.7667007  c0.1953011,0.2606964,0.4951248,0.4003983,0.8008003,0.4003983c0.1777,0,0.3584023-0.0479012,0.5205002-0.1464996  l13.6621017-8.3488998V47.8013191z M40.4795837,44.886219l-6.3591003-8.4776001L55.180584,24.7081203l6.2960968,7.3461018  L40.4795837,44.886219z" />
                                        <g>
                                        </g>
                                    </svg></span>
                                    <label>{this.props.allText && this.props.allText.package_selection}</label>
                                </h2>


                                <form>
                                    <div className="merchant_form_wrap">
                                        <div className="container">
                                            <div className="row form-section form_row">
                                                {this.state.package && this.state.package.map((item, index) => (
                                                    <div className="col-md-4" key={index}>
                                                        <div className="form-group">
                                                            <input type="radio" name="package" className="package_input" value={item.id} onClick={() => this.setPackage(item)} />
                                                            <div className={`package_item ${item.name}`}>
                                                                <h4 className="package_title"><span className="choosen"><i className="fas fa-check-circle"></i></span>{item.name}</h4>
                                                               
                                                                <ul>
                                                                    {
                                                                        item.package_description.split('^^^').map((item2, index2) => (
                                                                            <li>{item2}<span className="yes"><i className="fas fa-check"></i></span></li>

                                                                        ))
                                                                    }
                                                                     
                                                                </ul>
                                                                <h6 className="package_title">Price : {item.business_package_price}</h6>
                                                            </div>
                                                        </div>
                                                    </div>

                                                ))}



                                            </div>
                                            <div className="row form-section form_row">
                                                <div className="col-md-4">
                                                    <div className="form-group">

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row form_row">
                                                <div className="col-md-12">
                                                    <div className="form-group form_bottom_btns">
                                                        <button onClick={() => this.props.history.goBack()} className="btn btn-primary">← {this.props.allText && this.props.allText.txt_back}</button>
                                                        <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>{this.props.allText && this.props.allText.txt_submit} →</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="bottom"></div>
                        </div>
                    </div>
                </div>

            </>

        )
    }
}

const mapStateToProps = state => {
    return {
        ...state,
        allText: state.getTextContent.allText
    }
}


export default connect(mapStateToProps)(Merchant3);


