import SHape from "../Shape/SHape";
import "./Post.scss";
import { BiDotsHorizontal } from "react-icons/bi";
import { GiSelfLove } from "react-icons/gi";
import { MdOutlineModeComment } from "react-icons/md";
import { RiSendPlaneFill } from "react-icons/ri";
import { BsBookmark, BsEmojiSmile } from "react-icons/bs";
import SampleComments from "../SampleComments/SampleComments";
const Post = ({ setPostInfoModal, item }) => {
  const { username, userphoto, location, postimage, postdesc } = item;
  return (
    <>
      <SHape>
        <div className="post">
          <div className="post-header">
            <div className="post-header-left">
              <div className="post-header-left-user-logo">
                <img src={userphoto} alt="" />
              </div>
              <div className="post-header-left-user-info">
                <h6>{username}</h6>
                <p>{location}</p>
              </div>
            </div>
            <div className="post-header-right">
              <button onClick={() => setPostInfoModal(true)}>
                {" "}
                <BiDotsHorizontal />{" "}
              </button>
            </div>
          </div>

          <div className="post-body">
            <img src={postimage} alt="" />
          </div>

          <div className="post-reaction">
            <div className="post-reaction-left">
              <ul>
                <li>
                  <a href="##">
                    {" "}
                    <GiSelfLove />{" "}
                  </a>
                </li>
                <li>
                  <a href="##">
                    {" "}
                    <MdOutlineModeComment />{" "}
                  </a>
                </li>
                <li>
                  <a href="##">
                    {" "}
                    <RiSendPlaneFill />{" "}
                  </a>
                </li>
              </ul>
            </div>
            <div className="post-reaction-right">
              <button>
                {" "}
                <BsBookmark />{" "}
              </button>
            </div>
          </div>
          <div className="reaction-user-info">
            <img src={userphoto} alt="" />
            <p>
              Liked by{" "}
              <span className="reaction-user-frined-name">hammadsadi</span> and{" "}
              <span className="reaction-total-count">123 others</span>
            </p>
          </div>
          <div className="user-post-text-info">
            <p>
              {" "}
              <span className="text-post-user-name">{username}</span> {postdesc}
              ... <span className="post-more">more</span>
            </p>
            <div className="post-comment">
              <a href="##">View all comments 106</a>
            </div>
            <div className="sample-post-comment-area">
              <SampleComments />
            </div>
            <div className="user-post-date">
              <p>1 hours ago</p>
            </div>
          </div>

          <hr />
          <div className="add-comment">
            <div className="add-comment-left">
              <p>
                {" "}
                <BsEmojiSmile />{" "}
              </p>
            </div>
            <div className="add-comment-middle">
              <textarea name="" id="" placeholder="write a comment"></textarea>
            </div>
            <div className="add-comment-right">
              <a href="##">post</a>
            </div>
          </div>
        </div>
      </SHape>
    </>
  );
};

export default Post;
