import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class PokeItem extends Component {
    render() {
        return (
            <Link to={`/search/${this.props.pokeProp.pokemon}`}>
                <div className="poke-card" >
                    <img className="poke-image" alt="pokemon" src={this.props.pokeProp.url_image}></img>
                    <div className="poke-text">
                        <div>name: {this.props.pokeProp.pokemon} </div>
                        <div>type: {this.props.pokeProp.type_1}</div>
                        <div>attack: {this.props.pokeProp.attack} </div>
                        <div>defense: {this.props.pokeProp.defense} </div>
                    </div>
                </div>
            </Link>
        )
    }
}
