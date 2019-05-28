import profilePage from "./Reducers/profilePage";
import dialogsPage from "./Reducers/dialogsPage";



const state = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 12 },
        { id: 2, message: "It's my first post", likesCount: 11 },
        { id: 3, message: "Blabla", likesCount: 11 },
        { id: 4, message: "Dada", likesCount: 11 }
      ],
      newPostText: "поле ввода"
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Dimych" },
        { id: 2, name: "Andrew" },
        { id: 3, name: "Sveta" },
        { id: 4, name: "Sasha" },
        { id: 5, name: "Viktor" },
        { id: 6, name: "Valera" }
      ],
      messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "How is your " },
        { id: 3, message: "Yo" },
        { id: 4, message: "Yo" },
        { id: 5, message: "Yo" }
      ],
      newMessagesText: "поле ввода"
    },
    sidebar: {}
  },
 
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log("State chhanged");
  },
  subscribe(observer) {
    this._callSubscriber = observer; // observer
  },
  dispatch(action) {
    this._state.profilePage = profilePage(this._state.profilePage, action);
    this._state.dialogsPage = dialogsPage(this._state.dialogsPage, action);

    this._callSubscriber(this._state);
  }
  
};





export default state;
