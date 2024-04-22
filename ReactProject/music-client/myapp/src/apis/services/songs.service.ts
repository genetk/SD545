import http from "../axios"
const getSongs=()=>{
    return http.get('/api/music')

}
const login=(data:{username:string,password:string})=>{
    return http.post('/api/auth/login',data)
}

const search=(title:string)=>{
    return http.get('/api/music',{
        params:{search:title}
    })
}
const getPlaylist=()=>{
    return http.get('/api/playlist')
}
const addPlaylist=(songId:string)=>{
    return http.post('/api/playlist/add',{songId})

}
const deletePlaylist=(songId:string)=>{
    return http.post(`/api/playlist/remove`,{songId})
}
const searchSongByTitle = (title: string) => {

    return http.get(`/api/music?searach=${title}`);
  
  }
export default {getSongs,login,search,
  getPlaylist,addPlaylist,deletePlaylist,searchSongByTitle
}

