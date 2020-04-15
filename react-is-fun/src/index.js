// import React
import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import Chef from './Chef/Chef'
//import Footer from './Footer/Footer'
import Header from './Header/Header'
import Create from './Create/Create'

//import {BrowserRouter as Router, Switch, Route, Link, useParams} from 'react-router-dom';
import {Router, navigate} from '@reach/router'
import  firebase from './Firebase';
import Register from './Register/Register';
import Login from './Login/Login';
//import CommentBox from './CommentBox/CommentBox'

// newsApiKey= 'bf2205224b67455e8acde18d411d7afa';
// url = 'http://newsapi.org/v2/top-headlines?country=ca&apiKey=bf2205224b67455e8acde18d411d7afa'    


    class Main extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                dataItem: [],
                commentItem: [],
                user: null,
                displayName: null,
                userID: null,
                recipeId: null,
                commentId: null,
                
            };
        }

        componentDidMount() {

            firebase.auth().onAuthStateChanged(FBUser => {
                if(FBUser) {
                    this.setState({
                        user: FBUser,
                        displayName: FBUser.displayName,
                        userID: FBUser.uid,
                    });
                }
            });
            
            // const recipeData = './data.JSON';
            const recipeData = 'http://localhost:4000/recipes/';
            const commentData = 'http://localhost:4000/comment/';

            // fetch recipe
            fetch(recipeData)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    console.log(data)
                    this.setState({
                        dataItem: data
                    })
                })
                .catch((error)=>console.log(error))

            // fetch comment
            fetch(commentData)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    console.log(data)
                    this.setState({
                        commentItem: data
                    })
                })
                .catch((error)=>console.log(error))
            }


            renderItems(userName) {
                return this.state.dataItem.map(item => {
                    let comments = this.state.commentItem.filter(comment => comment.foreignID === item._id);
                    return (
                        <Router>
                            <Chef path="/" userName= {userName} key={item._id} item={item} comments={comments} />                    
                        </Router>
                    )
                });
            }

        registerUser = userName => {
            firebase.auth().onAuthStateChanged(FBUser => {
                FBUser.updateProfile({
                    displayName: userName
                }).then(()=>{
                    this.setState({
                        user: FBUser,
                        displayName: FBUser.displayName,
                        userID: FBUser.uid
                    });
                    navigate('/');
                })
            })
        }

        logOutUser = e => {
            e.preventDefault();
            this.setState({
               displayName: null,
               userID: null,
               user: null 
            });

            firebase.auth().signOut().then(() => {
                navigate('/Login');
            })
        }

        render() {
            return (

                <div>
                    <div>
                        <Header userName= {this.state.displayName} logOutUser={this.logOutUser} />
                    </div>
                    <Router><Register path="/Register" userName= {this.state.user} registerUser = {this.registerUser} /></Router>
                    <Router><Login path="/Login" userName= {this.state.user} /></Router>
                    <Router><Create path="/Create" /></Router>
                    

                    <div className="row">
                        {this.renderItems(this.state.displayName)}
                    </div>
                    
                    {/* <footer className="page-footer orange lighten-4">
                        <Footer/>
                    </footer> */}
                    
                </div>

                );            
        }
        }
    
ReactDOM.render(              
                    
                        
                        <Main/>
                        
                    
                
                , 
                document.getElementById('root'));
