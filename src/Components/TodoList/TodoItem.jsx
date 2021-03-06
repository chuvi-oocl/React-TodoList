import React, { Component } from "react";

import { Button, Row, Col, Select } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

import { deleteTodo, updateTodo } from "../../Apis/todos";
import {getLabelColor} from '../labelHelpers'

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

  handleLabelChange = (newLabel) => {
    const { item } = this.props;
    updateTodo({ ...item, labels: newLabel }).then((response) => {
      this.props.updateLabels(response.data.id, response.data.labels);
    });

  }

  render() {
    const { item, tagsOptions } = this.props;
    const { text, done, labels } = item;
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
        
        <Col span={3}>
          <Select mode="tags" style={{ width: '100%' }} onChange={this.handleLabelChange} value={labels}>
            {tagsOptions.map((label) => (<Select key={label} style={{backgroundColor: getLabelColor(label)}}>{label}</Select>))}
          </Select>
        </Col>
        <Col span={1}>
          <Button
            type="secondary"
            shape="circle"
            icon={<DeleteOutlined />}
            onClick={this.deleteItem}
            danger
          />
        </Col>
      </Row>
    );
  }
}
