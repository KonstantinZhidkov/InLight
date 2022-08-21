import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profileReducer";
import PostsBlock from "./PostsBlock";
import { connect } from "react-redux";


const mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNewPost: text => dispatch(addPostActionCreator(text)),
    }
}

const PostsBlockContainer = connect(mapStateToProps, mapDispatchToProps)(PostsBlock);

export default PostsBlockContainer;
