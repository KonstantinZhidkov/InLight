import React from 'react';
import styles from './PostsBlock.module.css';

import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";

const PostsBlock = ({ postsData, newPostText, dispatch }) => {

    const posts = postsData.map(item => {
       return  <Post key={item.id} postText={ item.text } avatar={ item.avatar } post={ item.post } likesCount={ item.likesCount }/>
    });

    let newPost = React.createRef();

    const addNewPost = () => {
        dispatch(addPostActionCreator());
    }

    const onAddNewPostChange = () => {
        let text = newPost.current.value;
        dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <section className={ styles.postsBlock }>
            <h3 className={ styles.postsBlock__header }>My posts</h3>
            <div className={ styles.postsBlock__textareaWrapper }>
                <textarea ref={ newPost } className={ styles.postsBlock__textarea }
                          onChange={ onAddNewPostChange } placeholder="Your News..." value={ newPostText } />
                <button className={ styles.postsBlock__button } onClick={ addNewPost }>New Post</button>
            </div>

            <div className="postsBlock__postsContainer">
                { posts }
            </div>
        </section>
    )
}

export default PostsBlock;