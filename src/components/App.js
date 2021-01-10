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
      content: "",
    },
  };

  async fadeOutInText() {
    const text = document.getElementById("text");
    text.classList.add("fadeOutIn");
    setTimeout(() => {
      text.classList.remove("fadeOutIn");
    }, 1000);
  }

  async handleNewQuote() {
    await this.fadeOutInText();
    const { author, content } = await fetchRandomQuote();
    const color = changeBodyColor();
    this.setState({ color, randomQuoteData: { author, content } });
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
