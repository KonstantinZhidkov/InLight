import avatar from '../images/content/avatar.png';
import post from '../images/content/post.png';
import profileBackground from '../images/content/profile_background.png';

import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
    _state: {
        dialogsPage: {
            dialogsData: [
                {id: 1, title: "Kate"},
                {id: 2, title: "Pavel"},
                {id: 3, title: "Max"},
                {id: 4, title: "Marek"},
                {id: 5, title: "Honza"}
            ],
            messages: [
                {id: 1, text: "Hi"},
                {id: 2, text: "Yoyo"},
                {id: 3, text: "How are you?"},
                {id: 4, text: "Good morning dude"},
                {id: 5, text: "Lets have a coffee today"},
            ],
            newMessageText: ''
        },
        profilePage: {
            personalInfo: {
                background: profileBackground,
                avatar: avatar,
                name: "Milana Walmark",
                city: "Okamora",
                date_of_birth: "25.06.2003",
                mail: "milana.wal@gmail.com"
            },
            postsData: [
                {id: 1, avatar: avatar, text: "Have you seen this beauty?", post: post, likesCount: 10},
                {id: 2, avatar: avatar, text: "Wow", likesCount: 5},
                {id: 3, avatar: avatar, text: "How are you today?", likesCount: 3},
                {id: 4, avatar: avatar, text: "Yo", likesCount: 9},
                {id: 5, avatar: avatar, text: "Good night", likesCount: 6}
            ],
            newPostText: ''
        },
        sidebar: {}
    },
    _rerenderApp() {},

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._rerenderApp = observer;
    },

    addPost() {
        let newPost = {
            id: 5,
            avatar: avatar,
            text: this._state.profilePage.newPostText,
            likesCount: 0
        }

        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.newPostText = '';
        this._rerenderApp(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;

        this._rerenderApp(this._state);
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._rerenderApp(this._state);
    }
}

export default store;