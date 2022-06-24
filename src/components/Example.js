import React from 'react'
import "./Example.css"
import axios from 'axios';
class Example extends React.Component {
    constructor(props) {
      super(props);
      this.state = {person: {}};
    }
    componentDidMount(){
        axios.get(`http://localhost:3001/api1/${this.props.id}`)
        .then(res => {
            const person = res.data;
            this.setState({ person });
        })
    }
  
    render() {
      return (
        <div className="container">
        <div className='block'>
            <div>{this.state.person.name}</div>
            -
            <div>{this.state.person.age}</div>
            <img src="/LogoRecap (2).png" alt="Logo" className='imag'/>
            </div>
            </div>
      );
    }
  }


export default Example
