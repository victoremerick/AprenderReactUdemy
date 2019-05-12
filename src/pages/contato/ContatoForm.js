import {reduxForm, Field} from 'redux-form'
import { connect } from 'react-redux';
import React from 'react';
import {submitContatoAction} from '../../actions/contatos/ContatoAction'

const ContatoFormFunc = props => {

    const {handleSubmit} = props;

    const submit = (data, submitContatoAction) => {
        submitContatoAction(data);
    };

    return(
        <form onSubmit={handleSubmit((fields) => submit(fields, submitContatoAction))}>
            <label>Nome: </label>
            <Field type='text' component='input' name='nome' />
            <br></br>
            <label>Email: </label>
            <Field type='email' component='input' name='email' />
            <button type='submit'>Submit</button>
        </form>
        
    );
}

const ContatoForm = (reduxForm({
    form:'formContato'
}))(ContatoFormFunc);

const mapStateToProps = state => ({});

export default connect(mapStateToProps, {submitContatoAction})(ContatoForm);