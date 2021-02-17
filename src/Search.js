import React, { Component } from 'react'
import pokemon from './pokemon.js'
import Sort from './Sort.js';
import Searchbar from './Searchbar.js';
import PokeList from './pokeList.js';
import request from 'superagent';

// import Dropdown from './Dropdown.js';


export default class Search extends Component {
    state = {
        pokemon: pokemon,
        sortBy: 'pokemon',
        sortOrder: 'asc',
        filter: '',
        searchQuery: '',
        loading: false,
    }


    getPokemon = async () => {
        console.log('the user clicked', this.state.searchQuery, this.state.sortBy, this.state.sortOrder);
        const data = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?sort=${this.state.sortBy}&direction=${this.state.sortOrder}&${this.state.sortBy}=${this.state.searchQuery}`)
        console.log(data);
        this.setState({
            pokemon: data.body.results,
        })

    }

    // for radio buttons
    handlePokeOptionChange = (e) => {
        e.preventDefault();
        this.setState({
            sortBy: e.target.value,
        })
        // console.log(e.target.value);

        // await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?sort=${this.state.sortBy}&&${this.state.sortOrder}`)
    }

    handleSortOptionChange = (e) => {
        e.preventDefault();
        this.setState({
            sortOrder: e.target.value,
        })
        // await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?sort=${this.state.sortBy}&&${this.state.sortOrder}`)
    }


    //for search query 
    handleSubmit = async (e) => {
        e.preventDefault();
        await this.getPokemon();
        // this.setState({ filter: this.state.searchQuery })
    }

    //for search query 
    handleInputChange = async (e) => {
        console.log('the query changed', e.target.value)

        this.setState({
            searchQuery: e.target.value,


        });
    }







    render() {

        return (
            <div className="body">
                <div className="sidebar">
                    <Sort handleSortOptionChange={this.handleSortOptionChange} handlePokeOptionChange={this.handlePokeOptionChange} />
                    <Searchbar handleSubmit={this.handleSubmit} handleInputChange={this.handleInputChange} />

                </div>
                <PokeList pokemon={this.state.pokemon} />

            </div>
        )

    }
}

