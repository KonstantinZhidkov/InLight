import React from 'react';
import styles from './PostsBlock.module.css';

import Post from './Post/Post';
import { Field, reduxForm } from "redux-form";

const PostsBlock = ({ addNewPost, postsData }) => {

    const posts = postsData.map(item => {
       return  <Post key={item.id}
                     postText={item.text}
                     avatar={item.avatar}
                     post={item.post}
                     likesCount={item.likesCount}
       />
    });

    const onAddNewPost = value => {
        addNewPost(value.newPostText);
    }

    return (
        <section className={styles.postsBlock}>
            <h3 className={styles.postsBlock__header}>My posts</h3>
            <AddPostRF onSubmit={onAddNewPost} />
            <div className="postsBlock__postsContainer">
                {posts}
            </div>
        </section>
    )
}

const AddPost = ({ handleSubmit }) => {
    return (
        <form className={styles.postsBlock__textareaWrapper} onSubmit={handleSubmit}>
            <Field className={styles.postsBlock__textarea}
                   component="textarea"
                   placeholder="Your News..."
                   name="newPostText"
            />
            <button className={styles.postsBlock__button}>New Post</button>
        </form>
    )
}

const AddPostRF = reduxForm({ form: "profileAddPost" })(AddPost);

export default PostsBlock;
