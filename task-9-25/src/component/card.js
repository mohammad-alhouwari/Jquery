import React, { Component } from "react";


class ClassExp extends Component {

    // state = {
    //   name :"hello from state "
    // }
    // changestate = () => {
    //   this.setState({
    //     name : "we changed the state in child"
    //   })
    // }
    render() {
        return (
            <div>
                <h1>{this.props.att}</h1>
                {/* <p>{this.state.name}</p>
      <button onClick={this.changestate}>change</button> */}
            </div>
        );
    }
}

export default ClassExp;