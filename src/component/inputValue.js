import React from 'react'


export default class Input extends React.Component{
    render() {
        return (
            <div className="div">
                <input type="radio" onChange={this.props.onclick}  name="options" value={this.props.value} />
             <span style={{marginLeft:"2%"}}>{this.props.value}</span>
            </div>
        )
    }
}