import React, { Component } from 'react';

export default class DoneList extends Component {
    render() {
        return (
            <div>
                DoneList
                {this.props.doneList.map((item) =>
                    <div key={item.id}>{item.text}</div>                
                )}
            </div>
        )
    }
}