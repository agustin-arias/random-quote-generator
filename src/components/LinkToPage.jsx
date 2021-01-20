import React, { Component } from "react";

class LinkToPage extends Component {
  render() {
    const { url } = this.props;
    return (
      <div id="footer" className="containter-fluid bg-dark">
        <a href={url}>
          <div className="d-flex justify-content-center p-1">
            <i className="fa fa-github" style={{ color: "white" }}></i>
          </div>
        </a>
      </div>
    );
  }
}

export default LinkToPage;
