import React, { Fragment } from "react";
import Comment from "../../container/Comment";
class Teacher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Teacher: [
        {
          category: "Locking",
          liclassName: "one_quarter first",
          name: "冷毛",
          srcpic: require("../../demo/teacher/lockingt.png"),
          video: "https://www.youtube.com/watch?v=UQwoPn2l8ck"
        },
        {
          category: "Popping",
          liclassName: "one_quarter ",
          name: "一德",
          srcpic: require("../../demo/teacher/ed.jpg"),
          video: "https://www.youtube.com/watch?v=Wam8hWvGlKE"
        },
        {
          category: "Hippop",
          liclassName: "one_quarter first ",
          name: "釣妹",
          srcpic: require("../../demo/teacher/hippop.jpeg"),
          video: "https://www.youtube.com/watch?v=pFjVY_nZHOo"
        },
        {
          category: "House",
          liclassName: "one_quarter ",
          name: "學耀",
          srcpic: require("../../demo/teacher/house.jpeg"),
          video: "https://www.youtube.com/watch?v=OvxzAt-3UsM"
        },
        {
          category: "Waacking",
          liclassName: "one_quarter first ",
          name: "哈妹",
          srcpic: require("../../demo/teacher/waacking.jpeg"),
          video: "https://www.youtube.com/watch?v=agVNDfFeUjE"
        },
        {
          category: "Girl Style",
          liclassName: "one_quarter",
          name: "黑妹",
          srcpic: require("../../demo/teacher/gs.jpg"),
          video: "https://www.youtube.com/watch?v=IZsohVlXNv0"
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
                {this.state.Teacher.map((ele, key) => {
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
                          <p>Teacher: {ele.name}</p>
                          <p>
                            video:
                            <a href={ele.video}>{ele.category} video</a>
                          </p>
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

export default Teacher;
