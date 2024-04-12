import { useRef, useState } from "react";
import "./App.scss";
import avatar from "./images/bozai.png";
import classNames from "classnames";
import _ from "lodash";
import { v4 as uuid4 } from "uuid";
import dayjs from "dayjs";
import ReplyItem from "./ReplyItem";

const defaultList = [
  {
    rpid: 3,

    user: {
      uid: "13258165",
      avatar,
      uname: "Jay Zhou",
    },

    content: "Nice, well done",

    ctime: "10-18 08:15",
    like: 88,
  },
  {
    rpid: 2,
    user: {
      uid: "36080105",
      avatar,
      uname: "Song Xu",
    },
    content: "I search for you thousands of times, from dawn till dusk.",
    ctime: "11-13 11:29",
    like: 88,
  },
  {
    rpid: 1,
    user: {
      uid: "30009257",
      avatar,
      uname: "John",
    },
    content:
      "I told my computer I needed a break... now it will not stop sending me vacation ads.",
    ctime: "10-19 09:00",
    like: 66,
  },
];

const user = {
  uid: "30009257",

  avatar,

  uname: "John",
};

const tabs = [
  { type: "hot", text: "Top" },
  { type: "newest", text: "Newest" },
];

interface comment {
  rpid: number | string;

  user: {
    uid: string;
    avatar: string;
    uname: string;
  };

  content: string;

  ctime: string;
  like: number;
}
const App = () => {
  const [comment, setComment] = useState<comment[]>(
    _.orderBy(defaultList, "like", "desc")
  );
  const [activetype, setActiveType] = useState("hot");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const deleteComment = (rpid: number | string) => {
    setComment(comment.filter((item) => item.rpid !== rpid));
  };
  const changeActiveType = (type: string) => {
    setActiveType(type);
    if (type === "hot") {
      setComment(_.orderBy(comment, "like", "desc"));
    } else {
      setComment(_.orderBy(comment, "ctime", "desc"));
    }
  };
  const makepost = () => {
    console.log(textareaRef.current?.value);
    const newComment = {
      rpid: uuid4(),
      user,
      content: textareaRef.current!.value,
      ctime: dayjs(Date.now()).format("MM-DD HH:mm"),
      like: 0,
    };
    setComment([...comment, newComment]);
    textareaRef.current!.value = "";
    textareaRef.current?.focus();
  };

  return (
    <div className="app">
      {/* Nav Tab */}
      <div className="reply-navigation">
        <ul className="nav-bar">
          <li className="nav-title">
            <span className="nav-title-text">Comments</span>

            <span className="total-reply">{comment.length}</span>
          </li>
          <li className="nav-sort">
            {/* highlight class name： active */}
            {tabs.map((tab) => (
              // <span className={`nav-item ${tab.type===activetype &&'active'}`}//before we import classnames
              <span
                className={classNames("nav-item", {
                  active: tab.type === activetype,
                })}
                key={tab.type}
                //  onClick={()=>setActiveType(tab.type)}>{tab.text}</span>//////i dont understand

                onClick={() => changeActiveType(tab.type)}
              >
                {tab.text}
              </span>
            ))}
          </li>
        </ul>
      </div>

      <div className="reply-wrap">
        <div className="box-normal">
          <div className="reply-box-avatar">
            <div className="bili-avatar">
            
                <img
                  className="bili-avatar-img"
                  src={avatar}
                  alt=" "
                />
           
            </div>
          </div>
          <div className="reply-box-wrap">
            <textarea
              ref={textareaRef}
              className="reply-box-textarea"
              placeholder="tell something..."
            />
            

            <div className="reply-box-send">
              <div className="send-text" onClick={makepost}>
                post
              </div>
            </div>
          </div>
        </div>

        <div className="reply-list">
          {comment.map((item) => (
            <ReplyItem
              onDelete={deleteComment}
              item={item}
              user={user}
              avatar={item.user.avatar}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
