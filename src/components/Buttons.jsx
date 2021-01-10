import React, { Component } from "react";
import "./Buttons.css";

class Buttons extends Component {
  render() {
    const {
      color,
      onNewQuote,
      randomQuoteData: { content, author },
    } = this.props;
    const twitterUrl = `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${content} ${author}`;
    const tumblrUrl = `https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,randomQuote&caption=${author}&content=${content}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`;
    const styles = { backgroundColor: color };
    return (
      <div className="d-flex justify-content-between">
        <div>
          <a
            href={twitterUrl}
            className="btn btn-primary mr-2 transition-color"
            style={styles}
            id="tweet-quote"
          >
            <i className="fa fa-twitter"></i>
          </a>
          <a
            href={tumblrUrl}
            className="btn btn-primary transition-color"
            style={styles}
          >
            <i className="fa fa-tumblr"></i>
          </a>
        </div>
        <button
          type="button"
          className="btn btn-primary transition-color"
          style={styles}
          onClick={onNewQuote}
          id="new-quote"
        >
          New Quote
        </button>
      </div>
    );
  }
}

export default Buttons;
