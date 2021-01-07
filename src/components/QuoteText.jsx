import React, { Component } from "react";

class QuoteText extends Component {
  render() {
    const { color, quote } = this.props;
    return (
      <div className="container">
        <h4 style={{ color }}>
          <i className="fa fa-quote-left mr-2"></i>
          {quote}
        </h4>
      </div>
    );
  }
}

export default QuoteText;
