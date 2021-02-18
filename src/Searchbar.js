import React, { Component } from 'react'

export default class Searchbar extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit} >
                    Search!
                        <input className="input-box" onChange={this.props.handleInputChange} />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}
