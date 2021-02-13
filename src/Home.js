import React, { Component } from 'react'



export default class Home extends Component {
    render() {

        function windowChange() {
            window.location.href = "/search";
        }

        return (
            <div className="home-page">
                <img className="pokeball" alt="pokeball" src="https://pngimg.com/uploads/pokeball/pokeball_PNG21.png" />
                <button className="enter-button" onClick={windowChange}> ENTER
                </button>
            </div>
        )
    }
}
