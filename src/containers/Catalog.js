import React from "react";
import Header from "../components/Header";
import Card from "./Card";
import Badge from "../components/Badge";

class Catalog extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Badge />
        <Card />
      </React.Fragment>
    );
  }
}

export default Catalog;
