import React from "react";
import './foodList.scss';

export interface FoodListProps {
}

export interface FoodListState {}

class FoodList extends React.Component<FoodListProps, FoodListState> {
//   constructor(props: []) {
//     super(props);
//   }


  render() {
    return (
      <div className="container">
        <h2>
          Food List
        </h2>
        <ul className="responsive-table">
          <li className="table-header">
            <div className="col col-1">Name</div>
            <div className="col col-2">Quantity</div>
            <div className="col col-3">Meal</div>
            <div className="col col-4">date</div>
          </li>
          <li className="table-row">
            <div className="col col-1" data-label="Job Id">
              Apple
            </div>
            <div className="col col-2" data-label="Customer Name">
              1
            </div>
            <div className="col col-3" data-label="Amount">
              Breakfast
            </div>
            <div className="col col-4" data-label="Payment Status">
              2020-1-17
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default FoodList;
