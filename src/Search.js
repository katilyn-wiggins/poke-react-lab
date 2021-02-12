import React, { Component } from 'react'
import pokemon from './pokemon.js'
// import Sort from './Sort.js';
// import Searchbar from './Searchbar.js';
import PokeList from './pokeList.js';
import Dropdown from './Dropdown.js';


export default class Search extends Component {
    state = {
        pokemon: pokemon,
        sortOrder: '',
        sortBy: '',
        filter: '',
    }


    handlePokeOptionChange = (e) => {
        this.setState({
            sortBy: e.target.value
        })
    }
    handleSortOptionChange = (e) => {
        this.setState({
            sortBy: e.target.value
        })
    }


    render() {

        if (this.state.sortBy) {
            this.state.pokemon.sort(
                (a, b) => a[this.state.sortBy] - (b[this.state.sortBy])
            );
        }

        const pokeOptions = ['pokemon', 'attack', 'defense']
        const sortOptions = ['ascending', 'descending']

        const filteredPokemon = this.state.pokemon.filter(pokemo => pokemo.pokemon.includes(this.state.filter))

        return (
            <div className="body">
                <div className="sidebar">
                    <div className="dropdown">
                        Which attribute would you like to search by?
                            <Dropdown
                            currentValue={this.state.sortBy}

                            handleChange={this.handlePokeOptionChange}
                            options={pokeOptions}
                        />
                    </div>
                    <div className="dropdown">
                        <Dropdown
                            currentValue={this.state.sortOrder}

                            handleChange={this.handleSortOptionChange}
                            options={sortOptions}
                        />
                    </div>
                </div>
                <PokeList pokemon={filteredPokemon} />
            </div>
        )
    }
}
