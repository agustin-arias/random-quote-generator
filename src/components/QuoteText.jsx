import React, { Component } from "react";
import "./QuoteText.css";

class QuoteText extends Component {
  render() {
    const { color, content } = this.props;
    return (
      <div className="container" id="text">
        <h3 style={{ color, transition: "color 1s" }}>
          <i className="fa fa-quote-left mr-2"></i>
          {content}
        </h3>
      </div>
    );
  }
}

export default QuoteText;
