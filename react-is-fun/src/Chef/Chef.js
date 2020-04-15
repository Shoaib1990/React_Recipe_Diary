import React from 'react';
import './Chef.css';
import CommentBox from './../CommentBox/CommentBox';
import CommentForm from './../CommentForm/CommentForm';

class Chef extends React.Component {
    render() {
        const {comments, item, userName} = this.props;
    
    return (
            <div className='col s12 m6 l4 recipeCard'>
                <div className="card">
                    <div className="card-image">
                        <img src={item.img} alt={item.title}></img>
                        <span className="card-title">{item.title}</span>
                    </div>
                    <div className="card-content orange lighten-4 Heading h1">
                        <p>{item.title}</p>
                    </div>

                    <div className="card-action">
                        <p><span className="orange-text text-darken-2"><span role="img" aria-label="chef">👨‍🍳</span> Chef: </span>{item.chef}</p>
                        <p><span className="orange-text text-darken-2"><span role="img" aria-label="timer">⏳</span> Preparation Time: </span>{item.preptime}</p>
                        <p><span className="orange-text text-darken-2"><span role="img" aria-label="clock">⏰</span> Cook Time: </span>{item.cooktime}</p>
                        <p><span className="orange-text text-darken-2"><span role="img" aria-label="book">📖</span> Instructions: </span>{item.recipesToDo}</p>
                        <a href={item.url} target='_blank' rel="noopener noreferrer"><span role="img" aria-label="clip">📎</span> Reference</a> 
                    </div>                    
                </div>
                
                <div className="card card-action">
                    
                    {comments &&
                        comments.map(comment => (
                            <CommentBox path='/'  userName={userName} key={comment._id} comment={comment} item={item} />  
                        ))                  
                    }
                    
                    

                    {userName && (
                        <CommentForm className="card-image" userName={userName} foreignID={item._id}/>
                                    )}

                    {/* <CommentForm className="card-image" userName={userName} foreignID={item._id}/> */}
                </div>
                
            </div>
        )
    }
}


export default Chef;