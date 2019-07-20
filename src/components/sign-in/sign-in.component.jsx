import React from 'react';
import FormInput from '../../components/form-input/form-input.component'

import './sign-in.styles.scss';


class SignIn extends React.Component{
    constructor (props) {
        super(props);        
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({
            email: '',
            password: ''
        });
    }


    render () {
        return (
            <div className='sign-in'>
                <h2>I already have an account.</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        type='email'
                        handleChange={this.handleChange}
                        name='email'
                        value={this.state.email}
                        label='Email'
                        required
                    />
                    <FormInput 
                        type='password'
                        handleChange={this.handleChange}
                        name='password'
                        value={this.state.password}
                        label='Password'
                        required
                    />
                    <input type='submit' value='Submit Form'/>
                </form>
            </div>
        )
    }
}

 export default SignIn;
