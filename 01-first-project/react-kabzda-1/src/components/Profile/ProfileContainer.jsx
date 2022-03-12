import React from 'react';
import Profile from './Profile';
import {getUserProfile, getStatus, updateStatus} from '../../Redux/profile-reducer'
import { connect } from 'react-redux';
import {  useMatch } from 'react-router-dom';
import { compose } from 'redux';



class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match ? this.props.match.params.userId : '22637';
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }


  render() {

    return (
      <Profile {...this.props} 
      profile={this.props.profile} 
      status={this.props.status} 
      updateStatus={this.props.updateStatus}/>
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
  status: state.profilePage.status,
  autorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth
});

export default compose (
  connect (mapStateToProps, {getUserProfile, getStatus, updateStatus}),
  //withAuthRedirect,
) (ProfileMatch)

