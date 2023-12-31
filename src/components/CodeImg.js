import "./CodeImgStyles.css"

import React, { Component } from 'react'

class CodeImg extends Component {
    render(){
        return (
            <div className="code-img">
                <div className="heading">
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                </div>
            </div>
          )
    }
 
}

export default CodeImg