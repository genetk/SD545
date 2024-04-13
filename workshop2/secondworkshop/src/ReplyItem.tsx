// interface Comment {
//     rpid: number | string;
//     user: {
//       uid: string,
//       avatar: string,
//       uname: string
//     };
//     content: string;
//     ctime: string;
//     like: number;
//   }
  
type Props = {
    rpid: number | string,
    user: {
      uid: string,
      avatar: string,
      uname: string
    },
    content: string,
    ctime: string,
    like: number,
    onDelete: (rpid: number | string) => void
  }
  
  const user = {
    // userid
    uid: '30009257',
    // profile
    avatar:'',
    // username
    uname: 'John',
  }
  
  function ReplyItem(prop: Props) {
    const { rpid, user:myuser, content, ctime, like,onDelete} = prop;
  
    const handleDelete = () => {
      onDelete(rpid);
    };
    return (
      <div className="reply-item" key={rpid}>
     
        <div className="root-reply-avatar">
          <div className="bili-avatar">
            <img
              className="bili-avatar-img"
              alt="Profile"
              src={myuser.avatar}
            />
          </div>
        </div>
  
        <div className="content-wrap">
          <div className="user-info">
            <div className="user-name">{myuser.uname}</div>
          </div>
  
          <div className="root-reply">
            <span className="reply-content">{content}</span>
            <div className="reply-info">
              <span className="reply-time">{ctime}</span>
  
              <span className="reply-time">Like:{like}</span>
  
              {myuser.uid === user.uid && (
                <span className="delete-btn" onClick={handleDelete}>
                  Delete
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default ReplyItem;
  