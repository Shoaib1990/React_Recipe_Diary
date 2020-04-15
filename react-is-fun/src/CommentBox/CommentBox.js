import React from 'react';
import './CommentBox.css';

class CommentBox extends React.Component {
    
    render() {
        let commentDataPanel;
        const {comment, item, userName} = this.props;
         if(item._id===comment.foreignID) {
            commentDataPanel =  <div>
                                    <p hidden><span className="orange-text text-darken-2">Recipe Id: </span><span className="p-italic">{item._id}</span></p>
                                    <p><span className="orange-text text-darken-2">Name: </span><span className="p-italic">{comment.user}</span></p>
                                    <p className="commentField"><span className="orange-text text-darken-2">Comment: </span><span className="p-italic">{comment.comment}</span></p>
                                    
                                </div>
         }
            return (
                <div className="commentBox__text">
                     {commentDataPanel}
                     
                </div>
                
            )   
    }
}


export default CommentBox;