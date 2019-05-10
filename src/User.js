import React, {Component} from 'react';

class User extends Component {

  constructor(props){
    super(props);
    this.state={
      name: "Victor"
    }
    this.changeState = this.changeState.bind(this);
  }

  changeState(){
    this.setState({
      name: "Victor Emerick"
    });
  }

  render(){
    return (
      <div>
        <div>
            Nome: {this.state.name}
        </div>
        <div>
            Foto: <img src={this.props.photo}/>
        </div>
        <button onClick={this.changeState}>Nome Completo</button>
      </div>
    );
  }
}

export default User;
