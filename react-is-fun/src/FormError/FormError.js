import React,{Component} from 'react';
import './FormError.css';

class FormError extends Component {
    render() {
        const {theMessage} = this.props;

        return(
            <div className="registerErrorText">{theMessage}</div>
        )
    }
}

export default FormError;