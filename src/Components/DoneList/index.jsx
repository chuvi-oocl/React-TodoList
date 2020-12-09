import React, { Component } from "react";
import { Tag, Row, Col } from "antd";

import { getLabelColor } from "../labelHelpers";
import TodoListFilter from "../TodoList/TodoListFilter";

export default class DoneList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
    };
  }

  changeKeyword = (event) => {
    this.setState({ keyword: event.target.value });
  };
  render() {
    const { keyword } = this.state;
    const doneItemStyle = {
      textAlign: "left",
      border: "2px solid lightgrey",
      paddingLeft: "5px",
    };
    return (
      <div>
        <h2>Completed Tasks</h2>

        <TodoListFilter keyword={keyword} changeKeyword={this.changeKeyword} />
        {this.props.doneList
          .filter(function (item) {
            return keyword === ""
              ? true
              : item.text.indexOf(keyword) >= 0 ||
                  item.labels.toString().indexOf(keyword) >= 0;
          })
          .map((item) => (
            <Row justify="center" align="middle" gutter={[2, 8]}>
              <Col span={4} offset={2}>
                <div key={item.id} style={doneItemStyle}>
                  {item.text}
                </div>
              </Col>
              <Col span={4}>
                <div style={{ textAlign: "left" }}>
                  {item.labels.map((label) => (
                    <Tag color={getLabelColor(label)}>{label}</Tag>
                  ))}
                </div>
              </Col>
            </Row>
          ))}
      </div>
    );
  }
}
