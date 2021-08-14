import React from 'react';
import styles from './Profile.module.css';

import PersonalInfo from './PersonalInfo/PersonalInfo';
import PostsBlock from './PostsBlock/PostsBlock';

export default class Profile extends React.Component {

    render() {
        const { personalInfo, postsData } = this.props.data;
        const { addPost } = this.props;

        return (
            <section className={ styles.profile }>
                <PersonalInfo background={ personalInfo.background } avatar={ personalInfo.avatar } name={ personalInfo.name } city={ personalInfo.city } date_of_birth={ personalInfo.date_of_birth } mail={ personalInfo.mail } />
                <PostsBlock postsData={ postsData } addPost={ addPost } />
            </section>
        )
    }
}