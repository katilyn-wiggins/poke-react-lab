import React, { Component } from 'react'

export default class PokeItem extends Component {
    render() {
        return (
            <div className="poke-card" >
                <img className="poke-image" alt="pokemon" src={this.props.pokeProp.url_image}></img>
                <div>name: {this.props.pokeProp.pokemon} </div>
                <div>attack: {this.props.pokeProp.attack} </div>
                <div>defense: {this.props.pokeProp.defense} </div>
            </div>
        )
    }
}
