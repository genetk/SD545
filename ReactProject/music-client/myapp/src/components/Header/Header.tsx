import { ChangeEvent,useState,KeyboardEvent } from "react";
import logo from "../../images/logo.jpeg";
import Song from "../../types/songs.types";
import songsService from "../../apis/services/songs.service";
import { Link } from "react-router-dom";




function Header() {
  

// const[title,setTitle]=useState('')
        
// const handleSearch = async () => {
//   try {
//       const response = await songsService.search(title);
//       if(response.status === 200){
//          setTitle(response.data)
//       }
//   } catch (error) {
//       console.error('error', error);
//   }
// }
// // const handleKeyPress = (e:KeyboardEvent<HTMLInputElement>) => {
// //   const value= e.currentTarget.value;

// //     if (e.key === 'Enter') {
// //       if(value.trim())
// //         handleSearch();
// //       e.currentTarget.value= '';
// //       e.currentTarget.focus();
// //     }
// //     else{
// //       return [];
// //     }
// // };[4:38 PM] Helen K Meles
// const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
 
//   const value = e.currentTarget.value;
//   setTitle(value);

//   if (e.key === 'Enter') {
//     if (value.trim())

//       handleSearch();
//     e.currentTarget.value = '';
//     e.currentTarget.focus();
//   }
//   else {
//     return [];
//   }
// };

  return (
    <header className="py-3 mb-3 border-bottom">
      <div className="container-fluid d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <img src={logo} alt="music logo" className="bi me-2" width="40" height="32" />
          
          <form className="me-3" role="search">
            <input
              type="search"
              className="form-control"
              placeholder="Search..."
            
             
             style={{width:'550%'}}
            />
          </form>
        </div>

        <Link to="/login"  type="button" className="btn btn-outline-primary me-2">Logout</Link>
      </div>
    </header>
  );
}

export default Header;
