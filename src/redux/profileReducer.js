import avatar from "../images/content/avatar.png";
import post from "../images/content/post.png";
import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    postsData: [
        {id: 1, avatar: avatar, text: "Have you seen this beauty?", post: post, likesCount: 10},
        {id: 2, avatar: avatar, text: "Wow", likesCount: 5},
        {id: 3, avatar: avatar, text: "How are you today?", likesCount: 3},
        {id: 4, avatar: avatar, text: "Yo", likesCount: 9},
        {id: 5, avatar: avatar, text: "Good night", likesCount: 6}
    ],
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                postsData: [...state.postsData, { id: 5, avatar: avatar, text: action.text, likesCount: 0 }],
            };
        }

        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }

        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }

        default:
            return state;
    }
}

export const addPostActionCreator = text => ({ type: ADD_POST, text });
export const setUserProfile = profile => ({ type: SET_USER_PROFILE, profile });
export const setStatus = status => ({ type: SET_STATUS, status });

export const getUserProfile = userId => dispatch => {
    profileAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data));
        });
}

export const getStatus = userId => dispatch => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data));
        });
}

export const updateStatus = status => dispatch => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        });
}

export default profileReducer;
