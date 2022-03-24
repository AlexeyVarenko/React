import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route, Redirect } from "react-router-dom";
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/login';
import { initializeApp } from '../src/Redux/app-reducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends Component {

  CatchAllUnhandleErrors=(promiseRejectionEvent)=>{
    alert("Come error occured")
  }

  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener("unhandledrejection", this.CatchAllUnhandleErrors)
  }

  componentWillUnmount() {
    window.removeEventListener("unhandledrejection", this.CatchAllUnhandleErrors)
  }

  render() {
    if (!this.props.initialized)
      return <Preloader />

    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <React.Suspense fallback={<Preloader />}>
              <Routes>
                <Route path="/dialogs/*" element={<DialogsContainer />} />

                <Route path="/profile/*" element={<ProfileContainer />} />

                <Route path="/users" element={<UsersContainer />} />

                <Route path="/login" element={<LoginPage />} />

                <Route path="*" element={<div>404 NOT FOUND</div>} />

                <Route path="/news" element={<News />} />
                <Route path="/music" element={<Music />} />
                <Route path="/settings" element={<Settings />} />


              </Routes>
          </React.Suspense>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})


export default compose(
  connect(mapStateToProps, { initializeApp }))(App);


