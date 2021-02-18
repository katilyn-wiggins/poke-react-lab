import React, { Component } from 'react'
import request from 'superagent';

export default class Detail extends Component {
    state = {
        pokeData: {}
    }
    componentDidMount = async () => {

        const data = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.props.match.params.specific}`);

        this.setState({

            pokeData: data.body.results.find(item => item.pokemon === this.props.match.params.specific),

        });

    }




    render() {


        return (
            <div>

                <div >
                    <img alt="pokemon" src={this.state.pokeData.url_image}></img>
                    <div >
                        <div>name: {this.state.pokeData.pokemon} </div>
                        <div>type: {this.state.pokeData.type_1}</div>
                        <div>attack: {this.state.pokeData.attack} </div>
                        <div>defense: {this.state.pokeData.defense} </div>
                    </div>
                </div>
            </div>
        )
    }
}
