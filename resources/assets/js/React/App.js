import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { posts } from '@/api.js';
import Post from './Post.js';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {}
        };

        posts.find(1).then(response => {
            console.log('Teste de API:');
            console.log(response.data);

            this.setState({ post: response.data });
        });
    }

    render() {
        return (
            <div className="container">
                {this.state.post ? (<Post post={this.state.post}></Post>) : ''}
            </div>
        );
    }
}