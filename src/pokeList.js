import React, { Component } from 'react'
import PokeItem from './pokeItem.js';


export default class PokeList extends Component {

    render() {



        const PokeListLayout =
            this.props.pokemon.map(

                singlePokeObject =>

                    <PokeItem key={singlePokeObject.pokemon} pokeProp={
                        singlePokeObject}
                    />)





        return (
            <ul className="poke-list">
                {PokeListLayout}
            </ul>
        )
    }
}
