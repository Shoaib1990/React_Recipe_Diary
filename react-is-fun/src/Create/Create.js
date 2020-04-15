import React from 'react';
//import {BrowserRouter as Router, Switch, Route, Link, useParams} from 'react-router-dom';
import axios from 'axios';

class Create extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    submitRecipe(e) {
        e.preventDefault();

        axios.post("http://localhost:4000/recipes/",{
            title: this.refs.title.value,
            chef: this.refs.chef.value,
            preptime: this.refs.preptime.value,
            cooktime: this.refs.cooktime.value,
            url: this.refs.url.value,
            img: this.refs.img.value,
            recipesToDo: this.refs.recipesToDo.value
        })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    render() {

        return (
        
            <div className="container">
                <h3>Add Recipe</h3>
    
            <div className="row">
                <form className="col s12" onSubmit={this.submitRecipe.bind(this)}>
                    <div className="row">
                        <div className="input-field col s6">
                        <label htmlFor="title">Recipe Title</label>
                        <input id="title" ref="title" type="text" className="validate" />
                        
                        </div>
                        <div className="input-field col s6">
                        <label htmlFor="chef">Chef Name</label>
                        <input id="chef" ref="chef" type="text" className="validate" />
                        
                        </div>
                    </div>
        
                    <div className="row">
                        <div className="input-field col s12">
                        <label htmlFor="preptime">Preparation Time</label>
                        <input id="preptime" ref="preptime" type="text" className="validate" />
                        
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                        <label htmlFor="cooktime">Cook Time</label>
                        <input id="cooktime" ref="cooktime" type="text" className="validate" />
                        
                        </div>
                    </div>
        
                    <div className="row">
                        <div className="input-field col s12">
                        <label htmlFor="img">Image Url</label>
                        <input id="img" ref="img" type="text" className="validate" />
                        
                        </div>
                    </div>
        
                    <div className="row">
                        <div className="input-field col s12">
                        <label htmlFor="url">Reference</label>
                        <input id="url" ref="url" type="text" className="validate" />
                        
                        </div>
                    </div>
        
                    <div className="row">
                        <div className="input-field col s12">
                        <label htmlFor="recipesToDo">Instructions</label>
                        <textarea id="recipesToDo" ref="recipesToDo" rows={10} cols={10} className="materialize-textarea validate"></textarea>
                        
                        </div>
                    </div>
        
                    <div className="row">
                        <button className="btn waves-effect waves-effect" type="submit" name="action">
                            Create
                        </button>
                    </div>
                </form>
            </div>
  
            </div>
            );
    }
}


export default Create;