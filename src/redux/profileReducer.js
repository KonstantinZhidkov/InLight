import avatar from "../images/content/avatar.png";
import profileBackground from "../images/content/profile_background.png";
import post from "../images/content/post.png";

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    /*personalInfo: {
        background: profileBackground,
        avatar: avatar,
        name: "Milana Walmark",
        city: "Okamora",
        date_of_birth: "25.06.2003",
        mail: "milana.wal@gmail.com"
    },*/
    postsData: [
        {id: 1, avatar: avatar, text: "Have you seen this beauty?", post: post, likesCount: 10},
        {id: 2, avatar: avatar, text: "Wow", likesCount: 5},
        {id: 3, avatar: avatar, text: "How are you today?", likesCount: 3},
        {id: 4, avatar: avatar, text: "Yo", likesCount: 9},
        {id: 5, avatar: avatar, text: "Good night", likesCount: 6}
    ],
    newPostText: '',
    profile: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_POST: {
            let newPost = {
                id: 5,
                avatar: avatar,
                text: state.newPostText,
                likesCount: 0
            }

            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: '',
            };
        }

        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }

        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }

        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = text => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const setUserProfile = profile => ({type: SET_USER_PROFILE, profile});

export default profileReducer;