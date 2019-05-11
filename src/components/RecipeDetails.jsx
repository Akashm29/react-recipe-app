import React, { Component } from "react";
import { recipe } from "../tempDetails";
class RecipeDetails extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     recipe: recipe,
  //     url: `https://www.food2fork.com/api/get?key=26660c3370436c12d9b45aa2462a1199&rId=${
  //       this.props.id
  //     }`
  //   };
  // }

  // async componentDidMount() {
  //   try {
  //     const data = await fetch(this.state.url);
  //     const jsonData = await data.json();
  //     this.setState({
  //       recipe: jsonData.recipe
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  state = {
    recipe: recipe
  };
  async componentDidMount() {
    const id = this.props.id;
    const url = `https://www.food2fork.com/api/get?key=26660c3370436c12d9b45aa2462a1199&rId=${id}`;

    try {
      const data = await fetch(url);
      const jsonData = await data.json();
      this.setState(
        (state, props) => {
          return { recipe: jsonData.recipe };
        },
        () => {}
      );
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const {
      image_url,
      title,
      publisher,
      publisher_url,
      ingredients
    } = this.state.recipe;

    const { handleIndex } = this.props;

    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-6 my-3">
              <button
                type="button"
                className="btn btn-warning mb-5 text-capitalize"
                onClick={() => handleIndex(1)}
              >
                back to recipe
              </button>
              <img src={image_url} alt="recipe" />
            </div>
            {/* details */}
            <div className="col-10 mx-auto col-md-6 my-3">
              <h6 className="text-uppercase">{title}</h6>
              <h6 className="text-warning text-uppercase text-slanted">
                provided by {publisher}
              </h6>
              <a
                href={publisher_url}
                target="_blank"
                className="btn btn-primary text-capitalize mt-2 mr-2"
              >
                Publisher Webpage
              </a>
              <a
                href={publisher_url}
                target="_blank"
                className="btn btn-primary text-sucess text-capitalize mt-2"
              >
                recipe url
              </a>
              <ul className="list-group mt-4">
                <h3 className="mt-3 mb-4">Ingredients</h3>
                {ingredients.map((item, index) => {
                  return (
                    <li className="list-group-item text-slanted">{item}</li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default RecipeDetails;
