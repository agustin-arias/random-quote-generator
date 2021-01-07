import React, { Component } from "react";

class QuoteAuthor extends Component {
  render() {
    const { color, author } = this.props;
    return (
      <div className="container mt-3" style={{ height: "50px" }}>
        <span className="float-right" style={{ color }}>
          - {author}
        </span>
      </div>
    );
  }
}

export default QuoteAuthor;
