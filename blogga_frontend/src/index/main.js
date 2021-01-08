import React, { Component } from "react";
import Item from "./item.js";

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch("blogs/")
      .then((data) => data.json())
      .then((newData) => this.setState({ data: newData }));
  }

  render() {
    var itemArray = this.state.data.map((i) => {
      return <Item data={i}></Item>;
    });
    return <div className="row">{itemArray}</div>;
  }
}
