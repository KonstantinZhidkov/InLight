const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_MESSAGE:
            let message = state.newMessageText;
            return {
                ...state,
                newMessageText: '',
                messages: [ ...state.messages, {id: 6, text: message}]
            }

        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.messageText
            }

        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, messageText: text});

export default dialogsReducer;