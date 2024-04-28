

import React, { useEffect, useState, MouseEvent } from "react";
import { Song } from '../../types/songs.types'
import PubSub, { unsubscribe } from "pubsub-js";
import songsService from "../../apis/services/songs.service";

import playIcon from '../../images/play-icon.png'
import dash_circle from '../../images/dash-circle.png'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';



export interface Playlist {
  id: string
  userId: string
  songId: string
  orderId: number
  title: string
  urlPath: string
}



function Playlist() {

  const [playlist, setPlaylist] = useState<Playlist[]>([]);
  const [currentSong, setCurrentSong] = useState<Playlist | null>(null);
  const userId = localStorage.getItem('userId')



  useEffect(() => {
    const getPlaylistData = async () => {
      try {
        const response = await songsService.getPlaylist();
        const data = response.data
        const filteredData = data.filter((songs: Playlist) => songs.userId === userId)
        setPlaylist(filteredData);
      } catch (error) {
        console.error(error);
      }
    };
    getPlaylistData();
    const token = PubSub.subscribe('songs', () => {
      getPlaylistData();
    });
    return () => {
      PubSub.unsubscribe(token)
    }

  }, []);



  const removeSongFromPlaylist = async (songid: string) => {

    try {
      const response = await songsService.deletePlaylist(songid);
      console.log("data from api", response.data);

      setPlaylist(response.data)

    } catch (error) {
      console.error(error)
    }

  }
  const togglePlay = (currentSong: Playlist) => {
    setCurrentSong(currentSong);
  };




  return (

    <div className="container">


      <div>
        <h3> Play lists</h3>
        <table className="table table-bordered border-primary">
          <thead>
            <tr>
              <th scope="col">index</th>
              <th scope="col">title</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>


            {playlist.map((song, index) => (<tr key={song.id}>
              <th scope="row" >{index + 1}</th>
              <td>{song.title}</td>
              <td key={song.songId} ><img onClick={() => removeSongFromPlaylist(song.songId)} src={dash_circle} alt="dashiconcircle" style={{ width: "25px", height: "25px", marginRight: '10px' }} />


                <img src={playIcon} alt={song.id} style={{ width: "25px", height: "25px" }} onClick={() => togglePlay(song)} />  Play

              </td>

            </tr>))}


          </tbody>

        </table>
      </div>


      {currentSong && (
        <AudioPlayer
          autoPlay
          src={`http://localhost:8000/${currentSong.urlPath}`}
          onPlay={e => console.log("onPlay")}
          

        />
      )}



    </div>

  )
}

export default Playlist;









