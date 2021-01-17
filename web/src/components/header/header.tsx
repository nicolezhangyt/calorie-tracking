import React from "react";
import './header.scss';

export interface HeaderProps {}

export interface HeaderState {}

class Header extends React.Component<HeaderProps, HeaderState> {
  state = {};

  render() {
    return (
      <div className="nav-bar">
          <ul className="nav-list">
              <li className="nav-list__item">Home</li>
              <li className="nav-list__item">Calculation</li>
              <li className="nav-list__item">Contact</li>
          </ul>
      </div>
    );
  }
}

export default Header;
