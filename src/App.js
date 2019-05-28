import React, { Component } from 'react';
import './App.css';


class Contador extends Component{

  constructor(props){
    super(props)
    this.state = {contador : this.props.contadorIncial}
    setInterval(()=> {
      this.setState({contador: this.state.contador + 1})
    },1000)
  }
  render(){
    console.log('ContadorNumero render()');
    return  <ContadorNumero numero={this.state.contador}></ContadorNumero>
  }

}

Contador.defaultProps = {
  contadorIncial :0
}

class ContadorNumero extends Component{

  render(){
    return <span>{this.props.numero}</span>
  }
}
class App extends Component {
  render() {
    return (
      <div className="App">
      <p>Primer component state</p>
      <Contador contadorIncial={100} />
      </div>
    );
  }
}

export default App;
