import React, { Component } from 'react'

export default class Sort extends Component {
    render() {
        return (
            <div>

                <div className="radio-button-parent" onChange={this.props.handlePokeOptionChange}>
                    Seach By Attribute!
                        Name <input type="radio" value="pokemon" name="radio" />
                        Type <input type="radio" value="type_1" name="radio" />
                        Attack <input type="radio" value="attack" name="radio" />
                        Defense <input type="radio" value="defense" name="radio" />

                </div>
                <div className="dropdown">
                    <select key="pokemon.pokemon" onChange={this.props.handleSortOptionChange}>
                        <option value="ascending">Ascending</option>
                        <option value="descending">Descending</option>
                    </select>
                </div>
            </div>
        )
    }
}
