import React from 'react';
import styles from './Profile.module.css';

import PersonalInfo from './PersonalInfo/PersonalInfo';

export default class Profile extends React.Component {

    render() {
        return (
            <section>
                <PersonalInfo name="Milana Walmark" city="Okamora" date_of_birth="25.06.2003" mail="milana.wal@gmail.com" />
            </section>
        )
    }
}