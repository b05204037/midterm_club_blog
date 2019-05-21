import React from "react";

class Topbar extends React.Component {
  render() {
    return (
      <div>
        <div className="wrapper row0">
          <div id="topbar" className="hoc clear">
            <div className="fl_left">
              <ul>
                <li>
                  <i className="fa fa-phone" /> (04)11211234
                </li>
                <li>
                  <i className="fa fa-envelope-o" /> info@domain.com
                </li>
              </ul>
            </div>
            <div class="fl_right">
              <ul>
                <li>
                  <a href="#">
                    <i class="fa fa-lg fa-home" />
                  </a>
                </li>
                <li>
                  <a href="#">Login</a>
                </li>
                <li>
                  <a href="#">Register</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="wrapper row1">
          <header id="header" class="hoc clear">
            <div id="logo" class="fl_left">
              <h1>
                <a href="index.html">NTUPDC</a>
              </h1>
              <p>NTU POP DANCE CLUB</p>
            </div>
            <div id="quickinfo" class="fl_right">
              <ul class="nospace inline">
                <li>
                  <strong>location: 共同，新體，舊體</strong>
                  <br />
                  (04)11211234
                </li>
                <li>
                  <strong>Sagittis:</strong>
                  <br />
                  +00 (123) 456 7890
                </li>
              </ul>
            </div>
          </header>
        </div>
      </div>
    );
  }
}

export default Topbar;
