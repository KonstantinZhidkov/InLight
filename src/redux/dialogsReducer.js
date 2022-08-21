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
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [ ...state.messages, {id: 6, text: action.message}]
            }

        default:
            return state;
    }
}

export const addMessage = message => ({type: ADD_MESSAGE, message});

export default dialogsReducer;