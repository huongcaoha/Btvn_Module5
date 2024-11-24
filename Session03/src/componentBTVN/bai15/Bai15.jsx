import React, { useState } from "react";
import AddSong from "./AddSong";
import ListSong from "./ListSong";

export default function Bai15() {
  let [songs, setSongs] = useState([]);

  const addSong = (value) => {
    setSongs([...songs, value]);
  };

  const deleteSongs = (index) => {
    let newArr = songs.filter((_, i) => i != index);
    setSongs(newArr);
  };

  return (
    <div>
      <h1>Đây là bài tập 15</h1>
      <AddSong addSong={addSong} />
      <ListSong songs={songs} deleteSongs={deleteSongs} />
      <hr />
    </div>
  );
}
