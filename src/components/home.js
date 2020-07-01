import React, { Component } from 'react';
import './home.css';



class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="home-area">
                <div className="container">
                    <h2>Your Home Decorating Hub</h2>
                    <p>Here, you’ll find all of the resources you <br/>
                     need to make decorating not only easier, <br/> but also fun!</p>
                </div>                
            </div>
        );
    }
}

export default Home;