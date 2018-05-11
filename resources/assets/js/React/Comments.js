import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Comments extends Component {
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
                <img src="http://media.socastsrm.com/wordpress/wp-content/blogs.dir/684/files/2017/04/thor.jpg" style={{ float: "left", width: "42px", display: "inline-block" }} />
                <div class="ui input form-group" style={{ paddingLeft: "1em", width: "475px" }}>
                    <input class="form-control" type="text" placeholder="Digite seu comentário" />
                </div>
            </div>
        );
    }
}