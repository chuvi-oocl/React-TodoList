import React, { Component } from 'react';

import { Row, Col } from "antd";

export default class DoneList extends Component {
    render() {
        const doneItemStyle = {
            textAlign:"left",
            border: '2px solid lightgrey',
            paddingLeft: '5px'
        }
        return (
            <div>
                <h2>Completed Tasks</h2>
                {this.props.doneList.map((item) =>
                
                    <Row justify="center" align="middle" gutter={[2, 8]}>
                        <Col span={8}>
                            <div key={item.id} style={doneItemStyle}>{item.text}</div>  
                        </Col>
                    </Row>              
                )}
            </div>
        )
    }
}