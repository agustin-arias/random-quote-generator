import React, { Component } from "react";

class Buttons extends Component {
  render() {
    const { color, onNewQuote } = this.props;
    return (
      <div className="d-flex justify-content-between">
        <div>
          <button
            type="button"
            className="btn btn-primary mr-2"
            style={{ backgroundColor: color }}
          >
            <i className="fa fa-twitter"></i>
          </button>
          <button
            type="button"
            className="btn btn-primary"
            style={{ backgroundColor: color }}
          >
            <i className="fa fa-tumblr"></i>
          </button>
        </div>

        <button
          type="button"
          className="btn btn-primary"
          style={{ backgroundColor: color }}
          onClick={onNewQuote}
        >
          New Quote
        </button>
      </div>
    );
  }
}

export default Buttons;
