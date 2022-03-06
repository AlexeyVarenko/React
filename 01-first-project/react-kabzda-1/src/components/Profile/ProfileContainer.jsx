import axios from 'axios';
import React from 'react';
import Profile from './Profile';
import {getUserProfile} from '../../Redux/profile-reducer'
import { connect } from 'react-redux';
import { useMatch } from 'react-router-dom';
import { getProfile } from '../../api/api';


class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match ? this.props.match.params.userId : '22637';
    this.props.getUserProfile(userId);
  }


  render() {
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
   profile:state.profilePage.profile
})



export default connect (mapStateToProps, {getUserProfile}) (ProfileMatch);