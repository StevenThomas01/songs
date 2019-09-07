import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Blues", duration: "4:05" },
    { title: "Steps", duration: "5:00" },
    { title: "Tragedy", duration: "3:60" },
    { title: "All Star", duration: "2:90" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.Type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
