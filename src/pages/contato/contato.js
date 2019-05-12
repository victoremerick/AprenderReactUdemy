import React, {Component} from 'react'
import ContatoForm from './ContatoForm';

class Contato extends Component{
    render(){
        return (
            <div>
                <h1>Essa é a Contato page</h1>
                <ContatoForm></ContatoForm>
            </div>
        );
    }
}

export default Contato;