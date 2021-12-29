import React from 'react';
import styles from './PostsBlock.module.css';

import Post from './Post/Post';

const PostsBlock = (props) => {

    const posts = props.postsData.map(item => {
       return  <Post key={item.id} postText={ item.text } avatar={ item.avatar } post={ item.post } likesCount={ item.likesCount }/>
    });

    let newPost = React.createRef();

    const onAddNewPost = () => {
        props.addNewPost();
    }

    const onAddNewPostChange = () => {
        let text = newPost.current.value;
        props.updateNewPostText(text);
    }

    return (
        <section className={ styles.postsBlock }>
            <h3 className={ styles.postsBlock__header }>My posts</h3>
            <div className={ styles.postsBlock__textareaWrapper }>
                <textarea ref={ newPost } className={ styles.postsBlock__textarea }
                          onChange={ onAddNewPostChange } placeholder="Your News..." value={ props.newPostText } />
                <button className={ styles.postsBlock__button } onClick={ onAddNewPost }>New Post</button>
            </div>

            <div className="postsBlock__postsContainer">
                { posts }
            </div>
        </section>
    )
}

export default PostsBlock;