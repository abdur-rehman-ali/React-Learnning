import React from "react";

class Welcome extends React.Component{
    render(){
        //Destrucutring of props in class component
        const {name} = this.props;

        //Desrtructuring of state
        // const {state1,state2} = this.state;
        return (
            <h1>Weclome {name}</h1>
        );
    }
}

export default Welcome;