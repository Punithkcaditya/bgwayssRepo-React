/**
 * 
 * @about CutomerRegister or this file
 *  CutomerRegister or Home page
 * 
 * 
 */


// lib
import React, { Component } from "react";

// custome components
import MyTree from "../../components/my_tree/MyTree";
import { _getMyTree } from "../../config/api/CommonApi"
import Loader from "../../components/common/Loader";

// TreeclassName
class Tree extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tree: [],
            loading: false
        };
    }

    componentWillMount() {
        this.setState({loading: true})
    }

    componentDidMount() {
        _getMyTree({id: 0})
            .then(resp => {
                if(resp.children.length > 0) {
                    this.setState({tree: resp.children, loading: false})
                } else {
                    this.setState({loading: false})
                }
            }).catch(err => {
                console.log(err)
                this.setState({loading: false})
            })
    }

    render() {
        console.log(this.state.tree)
        return (
            <>
            <section className="list-left">
            <div className="container">
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-11 col-sm-12">
                <h2 className="page-title">
                  <label>My Tree</label>
                </h2>
                {
                this.state.tree && this.state.tree.map(data => {
                return <MyTree
                    key={data.id}
                    id={data.id} 
                    name={data.text}
                    {...this.props}
                />
                })
                }
            </div>
            </div>
        </div>
        </section>
        {this.state.loading && <Loader />}
            </>
        )
    }
}

export default Tree;

