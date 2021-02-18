import React, { Component } from 'react'
import Sort from './Sort.js';
import Searchbar from './Searchbar.js';
import PokeList from './pokeList.js';
import request from 'superagent';
import Spinner from './Spinner.js'

// import Dropdown from './Dropdown.js';


export default class Search extends Component {
    state = {
        pokeData: [],
        sortBy: 'pokemon',
        sortOrder: 'asc',
        filter: '',
        searchQuery: '',
        loading: false,


        totalPokemon: 0,
        perPage: 12,
        currentPage: 1,
    }

    componentDidMount = async () => {
        await this.getPokemon();
    }


    getPokemon = async () => {
        // console.log('the user clicked', this.state.searchQuery, this.state.sortBy, this.state.sortOrder);

        this.setState({ loading: true });

        const data = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?sort=${this.state.sortBy}&direction=${this.state.sortOrder}&${this.state.sortBy}=${this.state.searchQuery}&page=${this.state.currentPage}&perPage=${this.state.perPage}`)
        // console.log(data);
        this.setState({
            loading: false,
            pokeData: data.body.results,
            totalPokemon: data.body.count,
        });

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
        await this.setState({ currentPage: 1 });
        await this.getPokemon();
        // this.setState({ filter: this.state.searchQuery })
    }

    //for search query 
    handleInputChange = async (e) => {
        // console.log('the query changed', e.target.value)

        this.setState({
            searchQuery: e.target.value,


        });
    }





    //page direction 
    handlePreviousClick = async (e) => {
        await this.setState({
            currentPage: this.state.currentPage - 1
        });
        await this.getPokemon();
    }

    handleNextClick = async (e) => {
        await this.setState({
            currentPage: this.state.currentPage + 1
        });
        await this.getPokemon();
    }

    //pokemon per page 
    handlePerPage = async (e) => {
        await this.setState({
            perPage: e.target.value
        })
        await this.getPokemon();
    }



    render() {
        // console.log(this.state.perPage)
        const lastPage = Math.ceil(this.state.totalPokemon / this.state.perPage);
        return (
            <div className="body">
                <div className="page-tools">
                    Items per page:
                    <select onChange={this.handlePerPage}>
                        <option value={12}>12</option>
                        <option value={24}>24</option>
                        <option value={48}>48</option>
                        <option value={60}>60</option>
                    </select>

                </div>
                <div className="sidebar">

                    <Sort handleSortOptionChange={this.handleSortOptionChange} handlePokeOptionChange={this.handlePokeOptionChange} />
                    Pokemon Per Page:

                    <Searchbar handleSubmit={this.handleSubmit} handleInputChange={this.handleInputChange} />


                </div>
                {
                    this.state.loading
                        ? <Spinner />
                        : <PokeList pokemon={this.state.pokeData} />

                }
                <div className="prev-next">
                    <button disabled={this.state.currentPage === 1} onClick={this.handlePreviousClick}>Previous</button><span>Page: {this.state.currentPage}</span>
                    <button disabled={this.state.currentPage === lastPage} onClick={this.handleNextClick}>Next</button>
                </div>
            </div>
        )

    }
}

