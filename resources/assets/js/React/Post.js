import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Comments from './Comments.js';

export default class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: props.post
        };
    }

    render() {
        const post = this.props.post;
        return (
            <div>
                <div className="ui card">
                    <div className="head content card-body">
                        <div style={{ width: "32px" }}>
                            <img src={post.user_image} className="user-picture" />
                        </div>
                        <div style={{ width: "480px", paddingLeft: "0.5em" }}>
                            <strong>{post.user_name}</strong> postou uma nova foto.<br />
                            <small>{post.created_at}</small>
                        </div>
                    </div>
                    <div className="content card-body">
                        {post.message}
                    </div>
                    <div className="content card-body">
                        <img src={post.picture} className="picture" />
                    </div>
                    <div className="content card-body">
                        <Comments comments={post.comments} />
                    </div>
                </div>
            </div>
        );
    }
}