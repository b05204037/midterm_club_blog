import React, { Fragment } from "react";
import Comment from "../../container/Comment";
class Act extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Activity: [
        {
          category: "成發",
          liclassName: "one_quarter first",
          time: "每年四月初",
          srcpic: require("../../demo/activity/act1.jpeg")
        },
        {
          category: "college high",
          liclassName: "one_quarter ",
          time: "每年十二月底",
          srcpic: require("../../demo/activity/2.jpeg")
        },
        {
          category: "battle (dmf...)",
          liclassName: "one_quarter first ",
          time: "不定",
          srcpic: require("../../demo/activity/3.jpeg")
        },
        {
          category: "showcase",
          liclassName: "one_quarter ",
          time: "不定",
          srcpic: require("../../demo/activity/5.jpeg")
        }
      ]
    };
  }
  render() {
    return (
      <div className="wrapper row3">
        <main className="hoc container clear">
          <div className="content">
            <figure>
              <ul>
                {this.state.Activity.map((ele, key) => {
                  return (
                    <Fragment>
                      <li className={ele.liclassName}>
                        <div className="poster">
                          <img className="pich" src={ele.srcpic} />
                        </div>
                      </li>
                      <li class="one_quarter ">
                        <div>
                          <h1>{ele.category}</h1>
                          <p>Time: {ele.time}</p>
                        </div>
                      </li>
                    </Fragment>
                  );
                })}
              </ul>
            </figure>
            <div className="borad" />
            <Comment />
          </div>
        </main>
      </div>
    );
  }
}

export default Act;
