import React, { Component } from "react";
import changeBodyColor from "../logic/changeBodyColor";
import fetchRandomQuote from "../logic/fetchRandomQuote";
import LinkToPage from "./LinkToPage";
import QuoteBox from "./QuoteBox";

export default class App extends Component {
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
        <LinkToPage
          url={"https://github.com/agustinntarias/random-quote-generator"}
        />
      </React.Fragment>
    );
  }
}
