import React from "react";
import { NavLink } from "react-router-dom";
export default () => {
  return (
    <div className="wrapper row2">
      <nav id="mainav" className="hoc clear">
        <ul className="clear">
          <li className="active">
            <NavLink to={"/home"}>Home</NavLink>
          </li>
          <li>
            <a className="drop" href="#">
              Class
            </a>
            <ul>
              <li>
                <a href="pages/gallery.html" />
              </li>
              <li>
                <NavLink to={"/teacher"}>Teachers</NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to={"/activity"}>Activity</NavLink>
          </li>
          <li>
            <a href="https://en.wikipedia.org/wiki/Locking_(dance)">Locking</a>
          </li>
          <li>
            <a href="https://en.wikipedia.org/wiki/Popping">Popping</a>
          </li>
          <li>
            <a href="https://en.wikipedia.org/wiki/History_of_hip_hop_dance">
              Hippop
            </a>
          </li>
          <li>
            <a href="https://en.wikipedia.org/wiki/House_dance">House</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
