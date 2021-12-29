import React from 'react';

import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import PostsBlock from "./PostsBlock";
import {connect} from "react-redux";

/*const PostsBlockContainer = () => {

    return (
        <StoreContext.Consumer>
            { store => {
                let state = store.getState();

                const addNewPost = () => {
                    store.dispatch(addPostActionCreator());
                }

                const onAddNewPostChange = (text) => {
                    store.dispatch(updateNewPostTextActionCreator(text));
                }

                return (<PostsBlock updateNewPostText={onAddNewPostChange}
                             addNewPost={addNewPost}
                             postsData={state.profilePage.postsData}
                             newPostText={state.profilePage.newPostText}/>)
            }
        }
        </StoreContext.Consumer>
    )
}*/

const mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNewPost: () => dispatch(addPostActionCreator()),
        updateNewPostText: text => dispatch(updateNewPostTextActionCreator(text))
    }
}

const PostsBlockContainer = connect(mapStateToProps, mapDispatchToProps)(PostsBlock);

export default PostsBlockContainer;