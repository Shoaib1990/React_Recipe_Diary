import React, {Component} from 'react';
import  firebase from '../Firebase';
import { navigate } from '@reach/router';
import FormError from '../FormError/FormError';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            displayName: '',
            email: '',
            password: '',
            errorMessage: null
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(e) {
        const itemName = e.target.name;
        const itemValue = e.target.value;
    
        this.setState({[itemName]: itemValue});
    }
    
      handleSubmit(e) {
        let registrationInfo = {
   
          email: this.state.email,
          password: this.state.password
        }
        e.preventDefault();
    
        firebase
          .auth().signInWithEmailAndPassword(
          registrationInfo.email,
          registrationInfo.password
        ).then(()=> {
          navigate('/');
        })
        .catch(error => {
          if (error.message !== null) {
            this.setState({ errorMessage: error.message });
          } else {
            this.setState({ errorMessage: null });
          }
        });
      }
    

    render() {
        
        return (
            <form className="col s10" onSubmit={this.handleSubmit}>
                <div className="container">
                  <div className="row">
                    <div>
                      <div>
                        <div>
                          <h3>Log in</h3>
                            <section className="input-field col s8">
                            {this.state.errorMessage !== null ? (
                            <FormError theMessage={this.state.errorMessage}/>
                            ): null}
                            <label
                                htmlFor="Email">
                                Email
                            </label>
                            <input
                                required
                                className="validate"
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email"
                                value={this.state.email}
                                onChange = {this.handleChange}
                            />
                            </section>
                            <section className="input-field col s8">
                            <input
                                required
                                className="validate"
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={this.state.password}
                                onChange = {this.handleChange}
                            />
                            </section>
                            <div className="input-field col s6">
                            <button className="btn btn-primary" type="submit">
                                Log in
                            </button>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </form>
        );
    }
}

export default Login;