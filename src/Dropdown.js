import React, { Component } from 'react'

export default class Dropdown extends Component {
    render() {
        return (
            <select
                value={this.props.currentValue}
                onChange={this.props.handleChange}
            >
                {
                    this.props.options.map(
                        listItem =>
                            <option

                                value={listItem}>
                                {listItem}
                            </option>
                    )
                }



            </select>
        )
    }
}
