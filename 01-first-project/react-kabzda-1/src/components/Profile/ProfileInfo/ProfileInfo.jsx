import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/images/user.png'

const ProfileInfo = (props) => {

  if (!props.profile){
    return <Preloader/>
  }

  const onMainPhotoSelected=(e)=>{
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0])
    }
  }


  return <div>
    <div className={s.descriptionBlock}>
      <ProfileStatusWithHooks status ={props.status} updateStatus={props.updateStatus}/>
      <img src={props.profile.photos.large || userPhoto } className={s.mainPhoto}/>
     <div> {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>} </div>
       <div>{props.profile.aboutMe}</div>
       <div>{props.profile.fullName}</div>
       <div>{props.profile.contacts.facebook}</div>
            {props.profile.lookingForAJob ?  <div>Ищу работу </div>   : null }
    </div>
  </div>
}

export default ProfileInfo;