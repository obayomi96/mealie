import React, { Component } from "react";
import axios from "axios";
import FoodItem from "./components/FoodItem";
import { MEAL_API_URL } from "./utils/common";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meal: []
    };
  }
  getRandomMeal = async () => {
    const response = await axios.get(`${MEAL_API_URL}random.php`);
    console.log("res", response);
    const { meals } = response.data;
    console.log("meal", meals);
    this.setState({
      meal: meals
    });
  };

  render() {
    const { meal } = this.state;
    const theMeal = meal.map(m => {
      return (
        <FoodItem
          key={m.idMeal}
          name={m.strMeal}
          category={m.strCategory}
          thumbnail={m.strMealThumb}
          instructions={m.strInstructions}
        />
      );
    });
    return (
      <div className="App">
        <header
          style={{
            boxSizing: "border-box",
            padding: "20px",
            alignItems: "center",
            // textAlign: "center",
            display: "flex",
            justifyContent: "space-between",
            width: "100%"
          }}
        >
          <h1>Random meals</h1>
          <input
            style={{ padding: "0px" }}
            type="text"
            placeholder="Search food"
          />
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
          {theMeal}
        </div>
      </div>
    );
  }
}

export default App;
