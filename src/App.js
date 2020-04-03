import React, { Component } from "react";
import PropTypes from 'prop-types';
import FoodItem from "./components/FoodItem";
import "./App.css";

import { connect } from 'react-redux';
import { getRandomMeal, searchMeal } from './Redux/actions/mealActions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meal: {},
      term: '',
    };
  }

  // componentDidMount = async () => {
  //   const { getRandom } = this.props;
  //   const response = await getRandom();
  //   this.setState({
  //     meal: response.payload
  //   });
  // }

  getRandomMeal = async () => {
    const { getRandom } = this.props;
    const response = await getRandom();
    this.setState({
      meal: response.payload
    });
    console.log('sss', this.state.meal)
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value.trim() });
  }

  searchMeal = async (event) => {
    event.preventDefault();
    const { search } = this.props;
    const { term } = this.state;
    const response = await search(term);
    if (response.payload === undefined){
      return 'Error'
    } else {
      this.setState({
        meal: response.payload,
        term: ''
      });
    }
  }

  render() {
    const { meal, term } = this.state;
    return (
      <div className="App">
        <header
          style={{
            boxSizing: "border-box",
            padding: "20px",
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
            width: "100%"
          }}
        >
          <h1>Random meals</h1>
          <form onSubmit={this.searchMeal}>
            <input
              style={{ padding: "0px" }}
              type="text"
              placeholder="Search food"
              value={term}
              name="term"
              onChange={this.handleChange}
            />
          </form>
        </header>
        <div
          onClick={this.getRandomMeal}
          style={{
            textAlign: "center",
            cursor: "pointer"
          }}
        >
          Get meal
        </div>
        <div
          style={{
            margin: "20px auto"
          }}
        >
          <FoodItem
            key={ meal.idMeal }
            name={meal.strMeal}
            category={meal.strCategory}
            tags={meal.strTags}
            source={meal.strSource}
            thumbnail={meal.strMealThumb}
            // videoUrl={`https://www.youtube.com/embed/${meal.strYoutube.slice(
            //   -11
            // )}`}
            instructions={meal.strInstructions}
          />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  getRandom: PropTypes.func,
  search: PropTypes.func,
}

const mapStateToProps = state => ({
  randomMeal: state.meal.randomMeal,
  searchResult: state.meal.searchedMeal,
});

const mapDispatchToProps = (dispatch) => ({
  getRandom: () => dispatch(getRandomMeal()),
  search: (searchTerm) => dispatch(searchMeal(searchTerm)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
