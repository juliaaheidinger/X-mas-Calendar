import React from 'react'

export default class Counter extends React.Component {
  render() {
    return <h1>Doors open: {this.props.num}</h1>
  }
}
