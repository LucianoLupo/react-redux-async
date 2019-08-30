import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/actions'

class PostList extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        return (
            <div>
                <h1>PostList</h1>
            </div>
        )
    }
}

export default connect(null, { fetchPosts })(PostList);