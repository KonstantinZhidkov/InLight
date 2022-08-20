import React from 'react';
import styles from './PersonalInfo.module.css';

import Preloader from "../../Preloader/Preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import profileBackground from "../../../images/content/profile_background.png";

const PersonalInfo = props => {

    if(!props.profile) {
        return <Preloader />
    }

    return (
        <div className={styles.personalInfo}>
            <div className={styles.personalInfo__background}>
                <img className={styles.personalInfo__backgroundImage} src={profileBackground} alt="background image"/>
            </div>
            <div className={styles.personalInfo__info}>
                <div className={styles.personalInfo__avatarBox}>
                    <img className={styles.personalInfo__avatar} src={props.profile.photos.large} alt="avatar picture"/>
                </div>
                <div className={styles.personalInfo__description}>
                    <h2 className={styles.personalInfo__name}>{props.profile.fullName}</h2>
                    <ul className={styles.personalInfo__list}>
                        <li className={styles.personalInfo__listItem}>About Me: {props.profile.aboutMe}</li>
                        <li className={styles.personalInfo__listItem}>Twitter: {props.profile.contacts.twitter}</li>
                        <li className={styles.personalInfo__listItem}>Looking for a job: {props.profile.lookingForAJob ? 'Yes' : 'No'}</li>
                        <li className={styles.personalInfo__listItem}>
                            <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default PersonalInfo;