import avatar from '../images/content/avatar.png';
import post from '../images/content/post.png';
import profileBackground from '../images/content/profile_background.png';

let state = {
    dialogsPage: {
        dialogsData: [
            {id: 1, title: "Kate"},
            {id: 2, title: "Pavel"},
            {id: 3, title: "Max"},
            {id: 4, title: "Marek"},
            {id: 5, title: "Honza"}
        ]
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
        ]
    }
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        avatar: avatar,
        text: postMessage,
        likesCount: 0
    }

    state.profilePage.postsData.push(newPost);
}

export default state;