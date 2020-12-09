import React, { Component } from "react";
import { addNewTodo } from "../../Apis/todos";
import { Button, Input, Row, Col } from "antd";
import { EnterOutlined } from "@ant-design/icons";

export default class TodoGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: "",
    };
  }

  changeTodo = (event) => {
    this.setState({ todo: event.target.value });
  };

  submitTodo = () => {
    addNewTodo(this.state.todo).then((response) => {
      this.props.create(response.data);
    });
    this.setState({ todo: "" });
  };

  render() {
    const { todo } = this.state;

    return (
      <Row justify="center" align="middle">
        <Col span={6} offset={1}>
          <Input
            placeholder="New Todo..."
            value={todo}
            onChange={this.changeTodo}
          />
        </Col>
        <Col span={2}>
          <Button
            type="secondary"
            shape="round"
            icon={<EnterOutlined />}
            onClick={this.submitTodo}
          >
            Submit
          </Button>
        </Col>
      </Row>
    );
  }
}
