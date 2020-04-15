import React from 'react';
import './CommentForm.css';
import axios from 'axios';
import { navigate } from '@reach/router';

class CommentForm extends React.Component {

    submitComment(e) {
        e.preventDefault();

        axios.post("http://localhost:4000/comment/",{
            user: this.refs.user.value,
            foreignID: this.refs.foreignID.value,
            comment: this.refs.comment.value,
        })
        .then((response) => {
            console.log(response);    
        })
        
        .catch((error) => {
            console.log(error);
        });
    }


    render() {
        const {userName, foreignID} = this.props;

        return(
            <form className="s12 commentForm" onSubmit={this.submitComment.bind(this)}>
                <div className="card-action">
                    <input id="user" ref="user" type="text" defaultValue={userName} hidden />
                    <input id="foreignID" ref="foreignID" type="text" value={foreignID} hidden readOnly />
                    
                    <div className="row">
                        <div>
                            <p><span className="orange-text text-darken-2">Write Comment: </span></p>
                            <textarea id="comment" ref="comment" rows={5} cols={5} maxLength={200} className="materialize-textarea"></textarea>        
                        </div>
                    </div>
        
                    <div className="row">
                        <button className="btn waves-effect waves-effect" type="submit" name="action">
                            Comment
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}

export default CommentForm;