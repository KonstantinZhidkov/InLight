import React from 'react';
import styles from './Post.module.css';

import postLike from '../../../../images/icons/postLike.svg'

const Post = ({ postText, avatar, post, likesCount }) => {

    return (
        <div className={ styles.postsBlock__post }>
            <div className={ styles.postsBlock__postHeaderWrapper }>
                <img className={ styles.postsBlock__avatar } src={ avatar } alt="avatar"/>
                <h4 className={ styles.postsBlock__postHeader } >{ postText }</h4>
            </div>
            <div className={ styles.postsBlock__postImageWrapper }>
                <img className={ styles.postsBlock__postImage } src={ post } />
            </div>
            <div className={ styles.postsBlock__likes }>
                <img src={ postLike } className={ styles.postsBlock__likesImg }/>
                <span className={ styles.postsBlock__likesNumber }>{ likesCount }</span>
            </div>
        </div>
    )
}

export default Post;