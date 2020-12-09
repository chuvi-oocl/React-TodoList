import React, { Component } from "react";

import { Input, Row, Col } from "antd";

export default class TodoListFilter extends Component {
  render() {
    const { keyword, changeKeyword } = this.props;
    return (
      <Row justify="center" align="top" gutter={[4, 8]}>
        <Col span={8}>
          <Input
            addonBefore="Filter "
            placeholder="filter..."
            value={keyword}
            onChange={changeKeyword}
          />
        </Col>
      </Row>
    );
  }
}
