import React, { Component } from "react";
import QuoteText from "./QuoteText";
import QuoteAuthor from "./QuoteAuthor";
import Buttons from "./Buttons";

class QuoteBox extends Component {
  render() {
    const {
      color,
      onNewQuote,
      randomQuoteData: { author, quote },
    } = this.props;
    return (
      <div
        className="vertical-center jumbotron text-center py-5 px-6 bg-white"
        style={{
          backgroundColor: color,
          color: color,
          width: "550px",
        }}
      >
        <QuoteText color={color} quote={quote} />
        <QuoteAuthor color={color} author={author} />
        <Buttons color={color} onNewQuote={onNewQuote} />
      </div>
    );
  }
}

export default QuoteBox;
