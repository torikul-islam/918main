import React, { Component } from 'react';
import '../account/mainTitleAccount.css'

class MainTitleAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <>
                <div className="mainActitle text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <h4>My Likes</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default MainTitleAccount;