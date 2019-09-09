import React from "react";
import { connect } from "react-redux";

const SongDetails = props => {
  // console.log(props);
  if (!props.song) {
    return <div>Please select a song</div>;
  }

  return (
    <div>
      <h3>Details for:</h3>
      <div>Song title: {props.song.title}</div>
      <div>Song duration: {props.song.duration}</div>
    </div>
  );
};

const mapStateToProps = state => {
  //console.log(state);
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetails);
