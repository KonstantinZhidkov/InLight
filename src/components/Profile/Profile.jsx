import React from 'react';
import styles from './Profile.module.css';

import PostsBlockContainer from "./PostsBlock/PostsBlockContainer";
import PersonalInfo from "./PersonalInfo/PersonalInfo";

const Profile = props => {
    return (
        <section className={styles.profile}>
            <PersonalInfo profile={props.profile} />
            <PostsBlockContainer />
        </section>
    )
}

export default Profile;