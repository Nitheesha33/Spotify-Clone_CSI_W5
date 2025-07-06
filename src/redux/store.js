import { configureStore } from '@reduxjs/toolkit';
// import userReducer from './userSlice';
// import playerReducer from './playerSlice';
// import playlistReducer from './playlistSlice';

const store = configureStore({
  reducer: {
    // user: userReducer,
    // player: playerReducer,
    // playlists: playlistReducer,
  },
});

export default store; 