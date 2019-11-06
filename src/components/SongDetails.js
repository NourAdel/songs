import React from "react";
import { connect } from "react-redux";

// {song} was originally (props)
// but we extraced it to make it easier
const SongDetail = ({ song }) => {
  if (!song) {
    return <div>select a song</div>;
  }
  return (
    <div className="ui raised very padded text container segment">
      <h3 className="ui header">Details for:</h3>
      <p>
        Title: {song.title}
        <br/>
        Duration: {song.duration}
      </p>
    </div>
  );
};

const mapStateToProps = state => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
