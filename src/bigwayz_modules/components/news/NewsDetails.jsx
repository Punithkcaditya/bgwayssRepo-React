/**
 * 
 * @about News or this file
 *  News or news page
 * 
 * 
 */

// lib
import React, { Component } from "react";
import { Spinner } from 'react-bootstrap';
// redux
// connect to store
import { connect } from "react-redux"
// bind actions
import { bindActionCreators } from "redux"

// api services
import { _newsDetails } from "../../config/api/Api";
// loader
import Loader from "../common/Loader";
// notify
import { notify } from "../../components/common/Toaster";
import {
    Link
} from 'react-router-dom';


// News classNameNameNameName
class NewsDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            news: '',
            newsLoading: true

        };
    }

    componentDidMount() {
        this.getNews()
    }

    getNews = () => {
        try {
            let req = {
                news_id: this.props.match.params.id
            }
            _newsDetails(req)
                .then(resp => {
                    if (resp.success) {
                        this.setState({ news: resp.data[0], newsLoading: false })
                    }
                })
                .catch(err => this.setState({ newsLoading: false }))

        } catch (err) { }
    }

    render() {
        return (
            <>
                {this.state.newsLoading && <Loader />}
                <section className="list-left">
                    <div className="container">
                        <div className="row justify-content-md-end page-content-wraper">
                            <div className="col-lg-11 col-offset-1">
                                <div className="breadcrumbs">
                                    <ul>
                                        <li><Link to="/dashboard">Dashboard</Link> <i className="fas fa-caret-right"></i></li>
                                        <li><Link to="/news">News</Link> <i className="fas fa-caret-right"></i></li>
                                        <li><Link to="/dashboard">{this.state.news && this.state.news.description.news_text}</Link></li>
                                    </ul>
                                </div>
                                <div className="news-detail-page-banner">
                                    <img src={this.state.news && this.state.news.description.display_image} className="img-responsive" />
                                </div>
                            </div>
                            <div className="col-lg-11 col-offset-1">
                                <div className="news-detail-page-title">
                                    <h4>{this.state.news && this.state.news.description.news_text}</h4>
                                    <span>{new Date(this.state.news && this.state.news.news_date).toLocaleString()}</span>
                                </div>
                                <div className="news-detail-text">
                                    <article>
                                        <p>{this.state.news && this.state.news.description.news_long_desc}</p>

                                    </article>
                                </div>
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
        ...state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        action: bindActionCreators({  }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsDetails);





