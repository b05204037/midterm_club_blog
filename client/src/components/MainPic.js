import React from "react";
import BackgroundImage from "../demo/backgrounds/pdc.jpg";

export default () => {
  const style = {
    backgroundImage: `url(${BackgroundImage})`,
    height: 500
  };

  return (
    <div className="bgded overlay" style={style}>
      <div id="pageintro" className="hoc clear">
        <div className="flexslider basicslider">
          <ul className="slides">
            <li>
              <article>
                <p>Nec imperdiet luctus</p>
                <h3 className="heading">
                  Odio nunc lobortis nibh ornare velit metus tortor.
                </h3>
                <footer>
                  <ul className="nospace inline pushright">
                    <li>
                      <a className="btn" href="#">
                        Vitae suspendisse
                      </a>
                    </li>
                    <li>
                      <a className="btn inverse" href="#">
                        Molestie semper
                      </a>
                    </li>
                  </ul>
                </footer>
              </article>
            </li>
            <li>
              <article>
                <p>Quam risus blandit</p>
                <h3 className="heading">
                  felis quisque consequat porttitor elementum.
                </h3>
                <footer>
                  <ul className="nospace inline pushright">
                    <li>
                      <a className="btn" href="#">
                        Tincidunt orci
                      </a>
                    </li>
                    <li>
                      <a className="btn inverse" href="#">
                        Euismod a nunc
                      </a>
                    </li>
                  </ul>
                </footer>
              </article>
            </li>
            <li>
              <article>
                <p>Ante vulputate maximus</p>
                <h3 className="heading">
                  Aliquam rutrum varius justo et pretium ex vestibulum.
                </h3>
                <footer>
                  <ul className="nospace inline pushright">
                    <li>
                      <a className="btn" href="#">
                        Magna consectetur
                      </a>
                    </li>
                    <li>
                      <a className="btn inverse" href="#">
                        Semper hendrerit
                      </a>
                    </li>
                  </ul>
                </footer>
              </article>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
