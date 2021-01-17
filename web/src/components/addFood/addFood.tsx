import React from "react";
import "./addFood.scss";

export interface AddFoodProps {}

export interface AddFoodState {}

class AddFood extends React.Component<AddFoodProps, AddFoodState> {
  render() {
    const curr = new Date();
    curr.setDate(curr.getDate());
    const date = curr.toISOString().substr(0, 10);
    return (
      <div>
        <div>
          <form className="add-user-form">
            <h1>Add Food</h1>
            <input type="text" name="name" placeholder="Enter food..." />
            <input
              className="form-item"
              type="text"
              name="quantity"
              placeholder="how many/much ..."
            />
            <select id="cars" name="cars">
              <option value="breakfast">breakfast</option>
              <option value="lunch">lunch</option>
              <option value="dinner">dinner</option>
            </select>
            <input type="date" name="date" defaultValue={date} />
            <input className="button" type="submit" value="send" />
          </form>
        </div>
      </div>
    );
  }
}

export default AddFood;
