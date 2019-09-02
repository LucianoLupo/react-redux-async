import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Card } from 'semantic-ui-react'
import {  fetchPostsAndUsers } from '../actions/actions';
import UserHeader from './UserHeader';

class PostList extends Component {
    componentDidMount() {
        this.props.fetchPostsAndUsers();
    }

    renderList() {
        return this.props.posts.map(post => {
            return (
                <Grid.Column>
                <Card.Group key= {post.id} >
                    <Card >
                    <Card.Content>
                        <Card.Header>{post.title}</Card.Header>
                        <Card.Meta><UserHeader userId={post.userId} /></Card.Meta>
                        <Card.Description>
                            {post.body}
                        </Card.Description>
                    </Card.Content>
                    </Card>
                </Card.Group>
                </Grid.Column>
            )
        });
    }

    render() {
        return (
            <Grid relaxed columns={4} padded>
                {this.renderList()}
            </Grid>
        )
    }
}

const mapStateToProps = ( state ) => {
    return {
        posts: state.posts
    }
};

export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);