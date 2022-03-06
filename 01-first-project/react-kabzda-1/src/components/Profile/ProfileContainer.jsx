import React from 'react';
import Profile from './Profile';
import {getUserProfile} from '../../Redux/profile-reducer'
import { connect } from 'react-redux';
import { Navigate, useMatch } from 'react-router-dom';



class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match ? this.props.match.params.userId : '22637';
    this.props.getUserProfile(userId);
  }


  render() {

    if (!this.props.isAuth) return <Navigate to={'/login'}/> ;

    return (
      <Profile {...this.props} profile={this.props.profile} />
    )
  }
}

const ProfileMatch = (props) => {
	let match = useMatch("/profile/:userId");
	return (
		<ProfileContainer {...props} match={match} />
	)
}



let mapStateToProps = (state) =>({
   profile:state.profilePage.profile,
   isAuth: state.auth.isAuth,
})



export default connect (mapStateToProps, {getUserProfile}) (ProfileMatch);