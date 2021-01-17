import React from "react";
import { getAllFoodList } from "../../services/services";
import "./foodCount.scss";

export interface FoodCountProps {}

export interface FoodCountState {}

class FoodCount extends React.Component<FoodCountProps, FoodCountState> {
  render() {
    return (
      <div className="card">
       <h1 className="food-title">Food number</h1>
       <h1 className="food-number">1</h1>
       <button className="get-button button">Get food list</button>
      </div>
    );
  }
}

export default FoodCount;
