import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'



export default withRouter(class Home extends Component {

    handleChange = (e) => {

        this.props.history.push('/search')
    }

    render() {
        return (
            <div className="home-page">
                <img className="pokeball" alt="pokeball" src="https://pngimg.com/uploads/pokeball/pokeball_PNG21.png" />


                <button className="enter-button" onClick={this.handleChange}> ENTER
                </button>
            </div>
        )
    }
})
