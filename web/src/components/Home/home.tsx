import React from "react";
import { addFood, getAllFoodList } from "../../services/services";
import AddFood from "../addFood/addFood";
import FoodCount from "../foodCount/foodCount";
import FoodList from "../foodList/foodList";
import "./home.scss";

export interface HomeProps {}

export interface HomeState {}

class Home extends React.Component<HomeProps, HomeState> {
  state = {
    food: {},
    numberOfFood: 0,
    foodList: [],
  };

  createFood = () => {
    addFood(this.state.food).then((response) => {
      console.log(response);
      this.setState({ numberOfFood: this.state.numberOfFood + 1 });
    });
  };

  getFoodList = () => {
    getAllFoodList().then((foodList) => {
      console.log(foodList);
      this.setState({
        foodList,
        numberOfFood: foodList.length,
      });
    });
  };

  render() {
    const foodList = this.state.foodList;
    return (
      <div>
        <div className="row">
          <AddFood />
          <FoodCount />
        </div>
        <FoodList />
      </div>
    );
  }
}

export default Home;
