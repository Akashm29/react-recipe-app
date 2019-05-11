import React, { Component } from "react";
import { recipe } from "../tempList";
class Recipe extends Component {
  state = {};
  render() {
    const { image_url, title, source_url, publisher } = this.props.recipe;
    const { handleDetails } = this.props;
    return (
      <div className="col-10 mx-auto col-md-6 col-lg-4 my-4">
        <div className="card">
          <img
            src={image_url}
            alt=""
            className="img-card-top"
            style={{ height: "14rem" }}
          />
          <div className="card-body text-capitalize">
            <h6>{title}</h6>
            <h6 className="text-warning text-slanted">
              Provided By {publisher}
            </h6>
          </div>
          <div className="card-footer">
            <button
              type="button"
              className="btn btn-primary text-capitalize"
              rel="no-rel"
              onClick={handleDetails}
            >
              details
            </button>
            <a
              href={source_url}
              target="_blank"
              className="btn btn-success mx-2 text-capitalize"
            >
              recipe url
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Recipe;
