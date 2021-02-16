import React, { Component } from 'react'
import pokemon from './pokemon.js'
import Sort from './Sort.js';
import Searchbar from './Searchbar.js';
import PokeList from './pokeList.js';
// import Dropdown from './Dropdown.js';


export default class Search extends Component {
    state = {
        pokemon: pokemon,
        sortBy: 'pokemon',
        sortOrder: 'ascending',
        filter: '',
        searchQuery: '',
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
            searchQuery: e.target.value,
        });
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({ filter: this.state.searchQuery })
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
                    <Sort handleSortOptionChange={this.handleSortOptionChange} handlePokeOptionChange={this.handlePokeOptionChange} />
                    <Searchbar handleSubmit={this.handleSubmit} handleInputChange={this.handleInputChange} />

                </div>
                <PokeList pokemon={filteredPokemon} />

            </div>
        )

    }
}
