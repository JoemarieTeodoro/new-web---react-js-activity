import React, {Component} from 'react';
import PostField from './post-section.js';

export default class App extends Component{

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAddList = this.handleAddList.bind(this);
        this.showList = this.showList.bind(this);
        this.state = {
            post: "My initial state",
            myArray: []
        }
    }

    handleSubmit(e) {
        this.setState({
           post: e
        });
    }

    handleAddList(e) {
        this.state.myArray.push(e);
		this.setState({
           myArray: this.state.myArray
        });
    }

    showList(){
        return this.state.myArray.map(function(item, i){
            return (<li key={i}>{item}</li>);
        });
    }

    render(){
        return(
            <div>
                <PostField
                    submit={this.handleSubmit}
                    add={this.handleAddList}
                />
                <p>Output here: {this.state.post}</p>
				<p>List here: </p>
                <ul>
                {this.showList()}
                </ul>

            </div>

        )
    }
}