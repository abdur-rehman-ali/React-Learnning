import React, { Component } from 'react'

class ClassClick extends Component {
    clickEvent()
    {
        alert('Button in class component clicked');
    }
    render() {
        return (
            <div>
                <button onClick={this.clickEvent}>Click class</button>
            </div>
        )
    }
}

export default ClassClick;
