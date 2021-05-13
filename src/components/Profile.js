import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { auth } from '../firebase';
import Nav from './Nav';
import "./Profile.css";

function Profile() {
    const user = useSelector(selectUser);

    return (
        <React.Fragment>
            <Nav />
            <div className="profile">
                <div></div>
                <div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <div className="profile__info">
                            <div>
                                <h1>Edit Profile</h1>
                                <img className="profile__avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="avatar" />
                            </div>
                            <div className="profile__details">
                                <h2>{user.email}</h2>
                                <div className="profile__plans">
                                    <h3>Plans</h3>
                                    <button onClick={() => auth.signOut()} className="profile__signOut">Sign Out</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div></div>
                <div></div>
            </div>
        </React.Fragment>
    )
}

export default Profile;