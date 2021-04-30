import React, { Component } from 'react';
import Joi from 'joi-browser';
import Input from './common/input';
import Form from './common/form';

class LoginForm extends Form {
    state = {
        data: {username: '', password: ''},
        errors:{}
    }
    schema = {
        username: Joi.string().required().label('Username'),
        password: Joi.string().required().label('Password')
    }
    render() { 
        // const {data, errors} = this.state;
        
        return ( 
            <div>
                <h1>Login</h1>
                
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput('username', 'Username')}
                    {this.renderInput('password', 'Password', 'password')}
                    
                    <button 
                        disabled={this.validate()}
                        className="btn btn-primary">Submit</button>
                </form>
            </div>
            
         );
    }
}
 
export default LoginForm;