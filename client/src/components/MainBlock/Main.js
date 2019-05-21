import React from "react";
import Background from "../../demo/320x340.png";

export default () => {
  const style = {
    backgroundImage: `url(${Background})`
  };

  return (
    <div className="wrapper row3">
      <main className="hoc container clear">
        <ul className="nospace group services">
          <li className="one_third first">
            <article>
              <h6 className="heading font-x3">DANCING STYLE</h6>
              <p>LOCKING</p>
              <p>POPPING</p>
              <p>HIPPOP</p>
              <p>HOUSE</p>
              <p>WAACKING</p>
              <footer>
                <a className="btn" href="#">
                  CALENDAR
                </a>
              </footer>
            </article>
          </li>
          <li className="one_third">
            <article className="bgded overlay" style={style}>
              <div className="txtwrap">
                <i className="block fa fa-4x fa-ioxhost" />
                <h6 className="heading">LOCKING</h6>
                <p>
                  Locking is a style of funk dance, which is today also
                  associated, but not to be confused with, hip hop. The name is
                  based on the concept of locking movements[&hellip;]
                </p>
                <footer>
                  <a href="https://en.wikipedia.org/wiki/Locking_(dance)">
                    More &raquo;
                  </a>
                </footer>
              </div>
            </article>
          </li>
          <li className="one_third">
            <article className="bgded overlay" style={style}>
              <div className="txtwrap">
                <i className="block fa fa-4x fa-joomla" />
                <h6 className="heading">POPPING</h6>
                <p>
                  Popping is a street dance and one of the original funk styles
                  that came from Fresno, California during the early 1970s. The
                  dance is based on the technique of quickly[&hellip;]
                </p>
                <footer>
                  <a href="https://en.wikipedia.org/wiki/Popping">
                    More &raquo;
                  </a>
                </footer>
              </div>
            </article>
          </li>
          <li className="one_third first">
            <article className="bgded overlay" style={style}>
              <div className="txtwrap">
                <i className="block fa fa-4x fa-jsfiddle" />
                <h6 className="heading">HIPPOP</h6>
                <p>
                  The History of Hip-Hop dance encompasses the people and events
                  since the late 1960s that have contributed to the development
                  of early hip-hop dance styles[&hellip;]
                </p>
                <footer>
                  <a href="https://en.wikipedia.org/wiki/History_of_hip_hop_dance">
                    More &raquo;
                  </a>
                </footer>
              </div>
            </article>
          </li>
          <li className="one_third">
            <article className="bgded overlay" style={style}>
              <div className="txtwrap">
                <i className="block fa fa-4x fa-language" />
                <h6 className="heading">HOUSE</h6>
                <p>
                  House dance is a social dance and Street dance primarily
                  danced to house music, that has roots in the clubs of Chicago
                  and of New York.The main[&hellip;]
                </p>
                <footer>
                  <a href="https://en.wikipedia.org/wiki/House_dance">
                    More &raquo;
                  </a>
                </footer>
              </div>
            </article>
          </li>
          <li className="one_third">
            <article className="bgded overlay" style={style}>
              <div className="txtwrap">
                <i className="block fa fa-4x fa-lastfm" />
                <h6 className="heading">WAACKING</h6>
                <p>
                  Waack/Punk is a form of dance created in the LGBT clubs of Los
                  Angeles,[1][2] during the 1970s disco era.[3] This dance style
                  was named punking because "punk" [&hellip;]
                </p>
                <footer>
                  <a href="https://en.wikipedia.org/wiki/Waacking">
                    More &raquo;
                  </a>
                </footer>
              </div>
            </article>
          </li>
        </ul>

        <div className="clear" />
      </main>
    </div>
  );
};
