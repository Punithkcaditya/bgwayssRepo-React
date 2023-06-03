/**
 * 
 * @about TicketList or this file
 *  TicketList or Home page
 * 
 * 
 */

// lib
import React, { Component } from "react";
// connect to store
import { connect } from "react-redux"
// api services
import {
    _getTickets
} from "../../config/api/Api";

// loader
import Loader from "../common/Loader";


// TicketList classNameNameNameName
class TicketList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            results: []

        };
    }


    componentDidMount() {
        this.getHistory()
    }
    getHistory = () => {
        try {
            _getTickets()
                .then(resp => {
                    this.setState({ results: resp.result, isLoading: false })
                })
                .catch(err => this.setState({ isLoading: false }))

        } catch (err) { this.setState({ isLoading: false }) }
    }

    getStr = (status) => {
        if (status == 0)
            return 'Pending'
        else if (status == 1)
            return 'Answered'
        else if (status == 3)
            return 'Closed'
        else if (status == 4)
            return 'Onhold'
        else
            return ""
    }

    render() {
        return (
            <>
                {this.state.isLoading && <Loader />}
                <section className="list-left">
                    <div className="container">

                        <div className="row justify-content-md-end page-content-wraper">
                            <div className="col-lg-11 col-offset-1">
                                <h2 className="page-title form_bottom_btns">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-28 0 461 462" width="25px" height="25px" fill="#444"><path d="m314.15625 3.101562c-1.875-1.960937-4.464844-3.0781245-7.175781-3.101562h-176c-22.054688 0-40.480469 18.078125-40.480469 40.132812v29.867188h-49.519531c-22.054688 0-40.480469 18.347656-40.480469 40.398438v311.46875c0 22.054687 18.425781 40.132812 40.480469 40.132812h233.039062c22.054688 0 40.480469-18.078125 40.480469-40.132812v-29.867188h49.519531c22.054688 0 40.480469-18.347656 40.480469-40.398438v-251.800781c-.089844-2.640625-1.1875-5.144531-3.066406-7zm2.34375 31.691407 53.875 55.207031h-47.09375c-3.609375-.0625-6.566406-2.894531-6.78125-6.5zm-22 387.074219c0 11.027343-9.453125 20.132812-20.480469 20.132812h-233.039062c-11.027344 0-20.480469-9.105469-20.480469-20.132812v-311.46875c.207031-11.210938 9.269531-20.234376 20.480469-20.398438h49.519531v261.601562c0 22.054688 18.425781 40.398438 40.480469 40.398438h163.519531zm69.519531-49.867188h-233.039062c-11.210938-.164062-20.273438-9.1875-20.480469-20.398438v-311.46875c0-11.027343 9.453125-20.132812 20.480469-20.132812h165.519531v63.5c0 14.5 12.28125 26.5 26.78125 26.5h61.21875v241.601562c-.207031 11.210938-9.269531 20.234376-20.480469 20.398438zm0 0" /><path d="m338.800781 311h-187.621093c-5.523438 0-10 4.476562-10 10s4.476562 10 10 10h187.621093c5.523438 0 10-4.476562 10-10s-4.476562-10-10-10zm0 0" /><path d="m151.179688 287h112.320312c5.523438 0 10-4.476562 10-10s-4.476562-10-10-10h-112.320312c-5.523438 0-10 4.476562-10 10s4.476562 10 10 10zm0 0" /><path d="m230.640625 166h-22.5625c-4.101563.011719-7.78125 2.519531-9.292969 6.328125-1.511718 3.8125-.550781 8.160156 2.425782 10.980469l56.390624 53.292968c3.925782 3.882813 10.257813 3.847657 14.140626-.082031 3.882812-3.925781 3.847656-10.257812-.082032-14.140625-.105468-.105468-.210937-.207031-.324218-.308594l-38.191407-36.199218c19.460938-1.03125 35.863281-14.867188 40.160157-33.871094h13.617187c5.523437 0 10-4.476562 10-10s-4.476563-10-10-10h-13.621094c-1.171875-5-3.191406-9-5.910156-14h19.527344c5.523437 0 10-4.476562 10-10s-4.476563-10-10-10h-78.839844c-5.523437 0-10 4.476562-10 10s4.476563 10 10 10h22.5625c9.289063.144531 17.6875 5.578125 21.621094 14h-44.183594c-5.523437 0-10 4.476562-10 10s4.476563 10 10 10h44.179687c-3.933593 8.421875-12.328124 13.855469-21.617187 14zm0 0" /></svg>
                                        <label> {this.props.allText && this.props.allText.heading_title_your_support_ticket}</label>
                                    </div>
                                    <button type="button" onClick={() => this.props.history.push("/addticket")} className="btn btn-primary">{this.props.allText && this.props.allText.create_support_button} →</button>
                                </h2>
                                <div className="gap-1"></div>
                                <div className="recent-activity">
                                    <div className="table-responsive">
                                        <table className="table table-borderless list-table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">{this.props.allText && this.props.allText.sl_no}</th>
                                                    <th scope="col">{this.props.allText && this.props.allText.list_title}</th>
                                                    <th scope="col">{this.props.allText && this.props.allText.txt_status}</th>
                                                    <th scope="col">{this.props.allText && this.props.allText.txt_creat_date}</th>
                                                    <th scope="col">{this.props.allText && this.props.allText.txt_action}</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    this.state.results && this.state.results.map((item, index) => (
                                                        <tr key={index}>
                                                            <th scope="row">{index + 1}</th>
                                                            <td>{item.ticket_title}</td>
                                                            <td>{this.getStr(item.status)}</td>
                                                            <td>{new Date(item.created_date).toLocaleDateString()}</td>
                                                            <td><button onClick={() => this.props.history.push(`ticket/${item.id}`)} className="btn btn-one">{this.props.allText && this.props.allText.viewdetails}</button></td>
                                                        </tr>
                                                    ))
                                                }

                                            </tbody>
                                            {
                                                !this.state.isLoading && this.state.results.length == 0 && <p style={{ marginTop: "10" }}>{this.props.allText && this.props.allText.no_more_ticket}</p>
                                            }
                                        </table>
                                    </div>
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
        ...state,
        allText: state.getTextContent.allText
    }
}



export default connect(mapStateToProps)(TicketList);





