import React, { Component } from 'react';
import Joi from 'joi-browser';
import Input from './common/input';
import Form from './common/form';

class RegisterForm extends Form {
    state = {
        data: {username: '', password: '', name:''},
        errors:{}
    }
    schema = {
        username: Joi.string().required().email().label('Username'),
        password: Joi.string().required().label('Password'),
        name: Joi.string().required().label('Name')
    }
    render() { 
        // const {data, errors} = this.state;
        
        return ( 
            <div>
                <h1>Register</h1>
                
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput('username', 'Username')}
                    {this.renderInput('password', 'Password', 'password')}
                    {this.renderInput('name', 'Name')}
                    
                    <button 
                        disabled={this.validate()}
                        className="btn btn-primary">Submit</button>
                </form>
            </div>
            
         );
    }
}
 
export default RegisterForm;