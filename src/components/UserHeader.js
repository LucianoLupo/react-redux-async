import React, { Component } from 'react';
import { connect } from 'react-redux';
class UserHeader extends Component {

    render() {
        const { user } = this.props
        if( !user ){
            return null
        }else {
            return (
                <div className="header">
                    <h1>{user.name}</h1>
                </div>
            )
        }
    }
}
const mapStateToProps = ( state, ownProps ) => {
    return {
        user: state.users.find(user => user.id === ownProps.userId )
    }
};

export default connect(mapStateToProps)(UserHeader);