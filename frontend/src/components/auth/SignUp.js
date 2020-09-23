import React, { Component } from 'react';

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        middleName: '',
        lastName: ''
    };

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="email">E-mail</label>
                        <input type="email" id="email" onChange={this.handleChange} />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange} />
                    </div>
                    <div>
                        <label htmlFor="email">Jméno</label>
                        <input type="text" id="firstName" onChange={this.handleChange} />
                    </div>
                    <div>
                        <label htmlFor="email">Prostřední jméno</label>
                        <input type="text" id="middleName" onChange={this.handleChange} />
                    </div>
                    <div>
                        <label htmlFor="email">Příjmení</label>
                        <input type="text" id="lastName" onChange={this.handleChange} />
                    </div>
                    <button>Přihlásit</button>
                </form>
            </div>
        );
    }
}

export default SignUp;
