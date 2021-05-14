import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { auth } from '../firebase';
import Nav from './Nav';
import "./Profile.css";
import Plan from './Plan';

function Profile() {
    const user = useSelector(selectUser);

    return (
        <React.Fragment>
            <div className="profile">
                <Nav/>
                <div className="profile__body">
                    <h1>Edit Profile</h1>
                    <div className="profile__info">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="avatar" />
                        <div className="profile__details">
                            <h2>{user.email}</h2>
                            <div className="profile__plans">
                                <h3>Plans</h3>
                                <Plan plan="Netflix Basic" quality="480p"/>
                                <Plan plan="Netflix Standard" quality="1080p"/>
                                <Plan plan="Netflix Premium" quality="4K + HDR" currentSub/>
                                <button onClick={() => auth.signOut()} className="profile__signOut">Sign Out</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Profile;