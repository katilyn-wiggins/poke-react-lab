import React, { Component } from 'react'
import pokemon from './pokemon.js'
// import Sort from './Sort.js';
// import Searchbar from './Searchbar.js';
import PokeList from './pokeList.js';
// import Dropdown from './Dropdown.js';


export default class Search extends Component {
    state = {
        pokemon: pokemon,
        sortBy: 'pokemon',
        sortOrder: 'ascending',
        filter: '',
    }


    handlePokeOptionChange = (e) => {
        this.setState({
            sortBy: e.target.value
        })
    }



    handleSortOptionChange = (e) => {
        this.setState({
            sortOrder: e.target.value
        })
    }

    handleInputChange = (e) => {
        this.setState({
            filter: e.target.value,
        });
    }


    render() {
        if ((this.state.sortBy !== 'attack' && this.state.sortBy !== 'defense')) {
            if (this.state.sortOrder === 'ascending') {
                this.state.pokemon.sort(
                    (a, b) => a[this.state.sortBy].localeCompare(b[this.state.sortBy])
                );
            } else {
                this.state.pokemon.sort(
                    (a, b) => b[this.state.sortBy].localeCompare(a[this.state.sortBy])
                );
            }
        }

        if ((this.state.sortBy === 'attack' || this.state.sortBy === 'defense')) {
            if (this.state.sortOrder === 'ascending') {
                this.state.pokemon.sort(
                    (a, b) => a[this.state.sortBy] - (b[this.state.sortBy])
                );
            } else {
                this.state.pokemon.sort(
                    (a, b) => b[this.state.sortBy] - (a[this.state.sortBy])
                );
            }
        }


        const filteredPokemon = this.state.pokemon.filter(pokemo => pokemo.pokemon.includes(this.state.filter))

        return (
            <div className="body">
                <div className="sidebar">
                    Seach By Attribute!
                    <div className="radio-button-parent" onChange={this.handlePokeOptionChange}>
                        Name <input type="radio" value="pokemon" name="radio" />
                        Type <input type="radio" value="type_1" name="radio" />
                        Attack <input type="radio" value="attack" name="radio" />
                        Defense <input type="radio" value="defense" name="radio" />

                    </div>
                    <div className="dropdown">
                        <select key="pokemon.pokemon" onChange={this.handleSortOptionChange}>
                            <option value="ascending">Ascending</option>
                            <option value="descending">Descending</option>
                        </select>


                    </div>
                    Search by Pokemon Name!
                    <input className="input-box" onChange={this.handleInputChange} />
                </div>
                <PokeList pokemon={filteredPokemon} />

            </div>
        )

    }
}