import React from "react";

export default function ListSong({ songs, deleteSongs }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>STT</td>
            <td>Song Name</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {songs.map((song, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{song}</td>
              <td>
                <button
                  onClick={() => deleteSongs(index)}
                  style={{ backgroundColor: "red" }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
