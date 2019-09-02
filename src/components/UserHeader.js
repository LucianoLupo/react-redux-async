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
                    <p>{user.name}</p>
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