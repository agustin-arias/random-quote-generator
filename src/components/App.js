import React, { Component } from "react";
import changeBodyColor from "../logic/changeBodyColor";
import fetchRandomQuote from "../logic/fetchRandomQuote";
import LinkToPage from "./LinkToPage";
import DefaultQuotes from "../logic/defaultQuotes";
import QuoteBox from "./QuoteBox";

const index = Math.floor(Math.random() * DefaultQuotes.length);
export default class App extends Component {
    state = {
        color: changeBodyColor(),
        randomQuoteData: DefaultQuotes[index],
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
                    url={
                        "https://github.com/agustinntarias/random-quote-generator"
                    }
                />
            </React.Fragment>
        );
    }
}
