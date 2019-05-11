import React, { Component } from "react";
import Recipe from "./Recipe";
import RecipeSearch from "./RecipeSearch";
class RecipeList extends Component {
  state = {};
  render() {
    const {
      recipes,
      handleDetails,
      value,
      handleSubmit,
      handleChange,
      error
    } = this.props;

    return (
      <React.Fragment>
        <RecipeSearch
          value={value}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <div className="container my-5">
          <div className="row">
            {error ? (
              <h1 className="text-danger text-center">{error}</h1>
            ) : (
              recipes.map(recipe => {
                return (
                  <Recipe
                    key={recipe.recipe_id}
                    recipe={recipe}
                    handleDetails={() => handleDetails(0, recipe.recipe_id)}
                  />
                );
              })
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default RecipeList;
