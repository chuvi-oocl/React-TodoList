import React, { Component } from 'react';
import { Alert } from 'antd';

export default class NotFoundPage extends Component {
    render() {
        return (
            <div>
                <Alert message="Page Not Found" type="error" showIcon/>
            </div>
        )
    }
}