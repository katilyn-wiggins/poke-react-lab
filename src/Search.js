import React, { Component } from 'react'
import pokemon from './pokemon.js'
import Sort from './Sort.js';
import Searchbar from './Searchbar.js'





export default class Search extends Component {
    state = {
        pokemon: '',
        sortOrder: '',
        sortBy: '',
        filter: '',
    }




    render() {
        return (
            <div>
                This is the search page
            </div>
        )
    }
}
