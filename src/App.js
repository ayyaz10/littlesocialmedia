import React, { Component } from 'react';
import PostList from './PostList.js';
import {robots} from './robots.js';
import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            newUsers: robots
        }
        
    }
    
    render(){
        
        if (!this.state.newUsers) {
            return <span>Loading...</span>;
        } else {
        return (
        
            <div>
                <PostList newUsers={this.state.newUsers}/>
            </div>
        )
       }
    }

}



export default App;
