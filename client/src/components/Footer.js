import React from "react";
import Background1 from "../demo/backgrounds/ntubattle.jpeg";
export default () => {
  const style1 = {
    backgroundImage: `url(${Background1})`
  };
  return (
    <div className="wrapper bgded overlay h-500" style={style1}>
      <section className="hoc container">
        <div className="sectiontitle center">
          <h3 className="heading">MORE ABOUT US</h3>
        </div>
        <ul className="nospace group center">
          <li className="one_third first">
            <article>
              <h6 className="heading font-x1">Instagram</h6>
              <footer>
                <a href="https://www.instagram.com/ntupdc30/">
                  Read More &raquo;
                </a>
              </footer>
            </article>
          </li>
          <li className="one_third">
            <article>
              <h6 className="heading font-x1">Facebook</h6>
              <footer>
                <a href="https://www.facebook.com/NTUPDC/">Read More &raquo;</a>
              </footer>
            </article>
          </li>
          <li className="one_third">
            <article>
              <h6 className="heading font-x1">Youtube</h6>
              <footer>
                <a href="https://www.youtube.com/results?search_query=ntupdc">
                  Read More &raquo;
                </a>
              </footer>
            </article>
          </li>
        </ul>
      </section>
    </div>
  );
};
