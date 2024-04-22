import dashicon from "../../images/dash-circle.png"
import plusicon from "../../images/plus-circle.png"
import React,{useEffect, useState,MouseEvent} from "react";
import Song from "../../types/songs.types";
import playicon from '../../images/play-icon.png'
import PubSub, { unsubscribe } from "pubsub-js";
import songsService from "../../apis/services/songs.service";

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
  const[currentsong,setCurrentsong]=useState(false)

  useEffect(() => {
    const getPlaylistData = async () => {
      try {
        const response = await songsService.getPlaylist();
        setPlaylist(response.data);
      } catch(error) {
        console.error(error);
      }
    };
    getPlaylistData();
    const token = PubSub.subscribe('songs', () => {
      getPlaylistData(); 
    });
    return ()=>{
      PubSub.unsubscribe(token)
    }

  }, []);

  const removeSongFromPlaylist = async () => {
    
    try {
      const response = await songsService.deletePlaylist();
      console.log("datafromapi",response.data.songId)
      if(response.status===200){
          const removedsong=playlist.filter(song=>song.songId!==response.data.songId)
         setPlaylist(removedsong)
      }
    }catch(error){
      console.error(error)
    }

  }

//  const playSong=(songid:string)=>{
//   cpnst song=playlist.(song=>song.)
//   setPlaylist(songid)
//  if(songToAdd){
//   setPlaylist([...playlist,songToAdd])
//  }
//  }
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
 
    
      {playlist.map((song,index)=>(<tr key={song.id}>
      <th scope="row" >{index+1}</th>
      <td>{song.title}</td>
      <td key={song.songId} ><img onClick={removeSongFromPlaylist} src={dashicon} alt={song.songId} style={{width:"25px",height:"25px",marginRight: '10px'}}/>
                  
             
                  <img src={playicon} alt={song.id}style={{width:"25px",height:"25px"}} /></td>
    
                  </tr> ))}
   
   
  </tbody>

  </table>
</div>
   </div>  
    
    )
}

export default Playlist;
