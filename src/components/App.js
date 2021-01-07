import React, { Component } from "react";
import "./App.css";
import QuoteBox from "./QuoteBox";
import changeBodyColor from "../logic/changeBodyColor";
import fetchRandomQuote from "../logic/fetchRandomQuote";

export default class App extends React.Component {
  state = {
    color: "",
    randomQuoteData: {
      author: "",
      quote: "",
    },
  };

  async handleNewQuote() {
    const { author, quote } = await fetchRandomQuote();
    const color = changeBodyColor();
    this.setState({ color, randomQuoteData: { author, quote } });
  }

  async componentDidMount() {
    await this.handleNewQuote();
  }

  render() {
    return (
      <React.Fragment>
        <QuoteBox
          color={this.state.color}
          onNewQuote={() => {
            this.handleNewQuote();
          }}
          randomQuoteData={this.state.randomQuoteData}
        />
      </React.Fragment>
    );
  }
}
