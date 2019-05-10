import React, {Component} from 'react';

class Formulario extends Component{

    constructor(props){
        super(props);
        this.state= {
            name: "",
            email: ""
        }

        this.onChangeEvent = this.onChangeEvent.bind(this);
    }

    onChangeEvent(event){
        let target = event.target;
        let index = targe.name;
        this.setState({
            [index]: target.value
        });
    }

    render(){
        return(
            <form>
                <label>
                    <input type="text" name="name" onChange={this.onChangeEvent} value={this.state.name}/>
                    <input type="text" name="email" onChange={this.onChangeEvent} value={this.state.email}/>
                </label>
                {this.state.name} - {this.state.email}
            </form>
        );
    }
}

export default Formulario;