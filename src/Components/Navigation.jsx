import React, { Component } from "react";
import { Link,} from 'react-router-dom';
import { Menu } from 'antd';
import { CheckCircleOutlined, EditOutlined} from '@ant-design/icons';

export default class Navigation extends Component {
    render(){
        return (
            <Menu  mode="horizontal">
                <Menu.Item key="list" icon={<EditOutlined />}>
                    <Link to="/">List page</Link>
                </Menu.Item>
                <Menu.Item key="done" icon={<CheckCircleOutlined />}>
                    <Link to="/done">Done page</Link>
                </Menu.Item>
            </Menu>
            
        )
    }
}