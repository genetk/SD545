import { ChangeEvent,useState,KeyboardEvent, useEffect, FormEvent } from "react";
import logo from "../../images/logo.jpeg";
import Song from "../../types/songs.types";
import songsService from "../../apis/services/songs.service";
import { Link } from "react-router-dom";





function Header() {
 
  const [songs, setSongs] = useState<Song[]>([]);
  const [keyboard, setKeyboard] = useState("");

  const handleSearch = async (e:ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    setKeyboard(title);
    try {
      const response = await songsService.searchSongByTitle();
      console.log(response)
      if (response.status === 200 && response.data) {
        setSongs(response.data); 
      
      } else {
        setSongs([]); 
      }
    } catch (error) {
      console.error(error);
    }
  };

 

  return (
    <header className="py-3 mb-3 border-bottom">
      <div className="container-fluid d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <img src={logo} alt="music logo" className="bi me-2" width="40" height="32" />
          
          <form className="me-3" role="search" >
         
            <input
              type="search"
              className="form-control"
              placeholder="Search..."
              style={{width:'550%'}}
              value={keyboard}
             onChange={handleSearch}
             />
             
        
            
            
           
           
                   
          </form>
        </div>

        <Link to="/login"  type="button" className="btn btn-outline-primary me-2">Logout</Link>
      </div>
      
       
    </header>
  );
}

export default Header;
