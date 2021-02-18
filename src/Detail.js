import React, { Component } from 'react'
import request from 'superagent';
import Spinner from './Spinner.js';

export default class Detail extends Component {
    state = {
        pokeData: {},
    }
    componentDidMount = async () => {

        this.setState({ loading: true });

        const data = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.props.match.params.specific}`);

        this.setState({
            loading: false,

            pokeData: data.body.results.find(item => item.pokemon === this.props.match.params.specific),

        });

    }




    render() {


        return (
            <div>
                {
                    this.state.loading
                        ? <Spinner />
                        : <div className="pokemon-detail-page">
                            <div className="pokemon-detail-name">{this.state.pokeData.pokemon} </div>

                            <img className="pokemon-detail-img" alt="pokemon" src={this.state.pokeData.url_image}></img>
                            <div className="pokemon-detail-text-content">
                                <div>type: {this.state.pokeData.type_1}</div>
                                <div>attack: {this.state.pokeData.attack} </div>
                                <div>defense: {this.state.pokeData.defense} </div>
                                <div>ability: {this.state.pokeData.ability_1} </div>
                                <div>speed: {this.state.pokeData.speed} </div>
                                <div>egg group: {this.state.pokeData.egg_group_1} </div>
                                <div>hp: {this.state.pokeData.hp} </div>
                                <div>height: {this.state.pokeData.height} </div>
                                <div>weight: {this.state.pokeData.weight} </div>
                            </div>
                        </div>
                }
            </div>
        )
    }
}
