import React from 'react';
import styles from './PersonalInfo.module.css';

const PersonalInfo = (props) => {

    const { background, avatar, name, city, date_of_birth, mail } = props;

    return(
        <div className={ styles.personalInfo }>
            <div className={ styles.personalInfo__background }>
                <img className={ styles.personalInfo__backgroundImage } src={ background } alt="background image"/>
            </div>
            <div className={ styles.personalInfo__info }>
                <div className={ styles.personalInfo__avatarBox }>
                    <img className={ styles.personalInfo__avatar } src={ avatar } alt="avatar picture" />
                </div>
                <div className={ styles.personalInfo__description }>
                    <h2 className={ styles.personalInfo__name }>{ name }</h2>
                    <ul className={ styles.personalInfo__list }>
                        <li className={ styles.personalInfo__listItem }>City: { city }</li>
                        <li className={ styles.personalInfo__listItem }>Date of Birth: { date_of_birth }</li>
                        <li className={ styles.personalInfo__listItem }>Mail: { mail }</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default PersonalInfo;