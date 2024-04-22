import  { useEffect, useState, MouseEvent,ChangeEvent } from "react";
import plusicon from "../../images/plus-circle.png";

import logo from "../../images/logo.jpeg"
import Song from "../../types/songs.types";
import songsService from "../../apis/services/songs.service";

import { Link } from "react-router-dom";
function Songs() {
  const [songs, setSongs] = useState<Song[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');


  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
   

   
    const filteredSongs = songs.filter(song =>
      song.title.toLowerCase().includes(query.toLowerCase())
    );
    setSongs(filteredSongs);
  };
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
     < header className="py-3 mb-3 border-bottom">
      <div className="container-fluid d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <img src={logo} alt="music logo" className="bi me-2" width="40" height="32" />
          
          <form className="me-3" role="search" >
         
            <input
              type="search"
              className="form-control"
              placeholder="Search..."
              style={{width:'550%'}}
              
             onChange={handleSearch}
             />
             
      
           
                   
          </form>
        </div>

        <Link to="/login"  type="button" className="btn btn-outline-primary me-2">Logout</Link>
      </div>
      
       
    </header>


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
    
  );
}

export default Songs;
