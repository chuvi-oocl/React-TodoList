import React, { Component } from "react";

import { Button, Row, Col } from "antd";
import { DeleteTwoTone } from "@ant-design/icons";

import { deleteTodo, updateTodo } from "../../Apis/todos";

export default class TodoListGroup extends Component {
  onToggleDone = () => {
    const { item } = this.props;
    updateTodo({ ...item, done: !item.done }).then((response) => {
      this.props.toggleDone(response.data.id);
    });
  };

  deleteItem = () => {
    const { id } = this.props.item;
    deleteTodo(id).then((response) => {
      this.props.deleteItem(response.data.id);
    });
  };

  render() {
    const { text, done } = this.props.item;
    const todoTextGenStyle = {
      textAlign: "left",
      border: "2px solid lightgrey",
      paddingLeft: '5px',
      paddingTop : '3px',
      paddingBottom:'3px'
    };
    const todoTextStyle = done
      ? {
          ...todoTextGenStyle,
          textDecorationLine: "line-through",
          textDecorationStyle: "solid",
          textDecorationThickness: "2px",
          backgroundColor: "lightgray",
        }
      : todoTextGenStyle;
    return (
      <Row justify="center" align="top" gutter={[0, 8]}>
        <Col span={4} offset={1}>
          <p style={todoTextStyle} onClick={this.onToggleDone}>
            {text}
          </p>
        </Col>
        <Col span={2}>
          <Button
            type="secondary"
            shape="circle"
            icon={<DeleteTwoTone twoToneColor="#777" />}
            onClick={this.deleteItem}
          />
        </Col>
      </Row>
    );
  }
}
