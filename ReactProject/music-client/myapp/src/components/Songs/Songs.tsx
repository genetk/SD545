import React, { useEffect, useState, MouseEvent } from "react";
import plusicon from "../../images/plus-circle.png";
import { useNavigate } from "react-router-dom";

import Song from "../../types/songs.types";
import songsService from "../../apis/services/songs.service";
import Header from "../Header/Header";
function Songs() {
  const [songs, setSongs] = useState<Song[]>([]);

  const addSongsToPlaylist = async (e: MouseEvent<HTMLImageElement>) => {
    const value = e.currentTarget.alt;
    try {
      const response = await songsService.addPlaylist(value);
      PubSub.publish("songs", response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    const fetchedSongs = async () => {
      try {
        const response = await songsService.getSongs();
        setSongs(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchedSongs();
  }, []);
  return (
    <div className="container mt-5">
      <div>
        <h3>SONGS TO PLAY</h3>
        <table className="table table-bordered border-primary table-hover">
          <thead>
            <tr>
              <th scope="col">index</th>
              <th scope="col">title</th>
              <th scope="col">ReleaseDate</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
           
            {songs.map((song, index) => (
              <tr key={song.id}>
                <th scope="row">{index + 1}</th>
               
                <td>{song.title}</td>
                <td>{song.releaseDate}</td>
                <td>
                  <img
                    onClick={addSongsToPlaylist}
                    src={plusicon}
                    alt={song.id}
                    style={{ width: "25px", height: "25px" }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Songs;
