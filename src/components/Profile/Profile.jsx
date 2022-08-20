import React from 'react';
import styles from './Profile.module.css';

import PostsBlockContainer from "./PostsBlock/PostsBlockContainer";
import PersonalInfo from "./PersonalInfo/PersonalInfo";

const Profile = props => {
    return (
        <section className={styles.profile}>
            <PersonalInfo
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
            />
            <PostsBlockContainer />
        </section>
    )
}

export default Profile;