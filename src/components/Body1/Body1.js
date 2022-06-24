import React from 'react'
// import "./Body1.css"
import Login_1 from "./Login_1";
import Register_1 from "./Register_1";
class Body1 extends React.Component {
    constructor(props) {
      super(props);
    }
    
    render (){
    return (
        <div className="body1">    
            <Login_1/>
            <Register_1/>
        </div>

    )
}
}

export default Body1
