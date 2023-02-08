import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import IgModal from "../../components/IgModal/IgModal";
import Menu from "../../components/Menu/Menu";
import Post from "../../components/Post/Post";
import SHape from "../../components/Shape/SHape";
import Story from "../../components/Story/Story";
import SuggestUser from "../../components/SuggestUser/SuggestUser";
import "./Home.scss";
export const Home = () => {
  const [modal, setModal] = useState();
  const [postInfoModal, setPostInfoModal] = useState();
  const [post, setPost] = useState([]);

  const [postCreate, setPostCreate] = useState({
    username: "",
    userphoto: "",
    location: "",
    postimage: "",
    postdesc: "",
  });

  const handlePostInput = (e) => {
    setPostCreate((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handlePostCreateSubmit = (e) => {
    e.preventDefault();
    if (
      postCreate.username === "" ||
      postCreate.userphoto === "" ||
      postCreate.location === "" ||
      postCreate.postimage === "" ||
      postCreate.postdesc === ""
    ) {
      swal({
        title: "Ohhhhh....!",
        text: "All Fileds are Required",
        icon: "error",
      });
    } else {
      axios.post("http://localhost:5050/userPost", postCreate).then((res) => {
        setPostCreate({
          username: "",
          userphoto: "",
          location: "",
          postdesc: "",
          postimage: "",
        });
      });

      setModal(false);
    }
  };
  useEffect(() => {
    axios
      .get("http://localhost:5050/userPost?_sort=id&_order=desc")
      .then((res) => {
        setPost(res.data);
      });
  }, []);
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2 sadi">
            <Menu setModal={setModal} />
          </div>
          <div className="col-lg-6 mt-3">
            <div className="ig-post-middle">
              <div className="user-story mb-3">
                <SHape>
                  <div className="ig-story-area">
                    <Story />
                  </div>
                </SHape>
              </div>
              {post.map((item, index) => (
                <div className="user-post mt-2" key={index}>
                  <Post setPostInfoModal={setPostInfoModal} item={item} />
                </div>
              ))}

              {postInfoModal && (
                <IgModal hide={setPostInfoModal}>
                  <div className="post-info">
                    <ul>
                      <li>
                        <a href="">report</a>
                      </li>
                      <hr />
                      <li>
                        <a href="">unfollow</a>
                      </li>
                      <hr />
                      <li>
                        <a href="">add to favourite</a>
                      </li>
                      <hr />
                      <li>
                        <a href="">go to post</a>
                      </li>
                      <hr />
                      <li>
                        <a href="">share to</a>
                      </li>
                      <hr />
                      <li>
                        <a href="">copy link</a>
                      </li>
                      <hr />
                      <li>
                        <a href="">embed</a>
                      </li>
                      <hr />
                      <li>
                        <a href="">report</a>
                      </li>
                      <hr />
                      <li>
                        <a href="">copy link</a>
                      </li>
                      <hr />
                      <li>
                        <a href="">about this account</a>
                      </li>
                      <hr />
                      <li>
                        <a href="">delete post</a>
                      </li>
                    </ul>
                  </div>
                </IgModal>
              )}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="ig-user-right">
              <div className="user-login-info">
                <div className="user-login-info-left">
                  <div className="login-info-left">
                    <a href="##">
                      <img
                        src="https://i1.sndcdn.com/avatars-jRXwcAeJYYa5np7a-EGDQqA-t500x500.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="login-info-right">
                    <a href="##">hammadsadi</a>
                    <h5>Hammad sadi</h5>
                  </div>
                </div>
                <div className="user-login-info-right">
                  <a href="##">switch</a>
                </div>
              </div>
              <div className="ig-user-suggest">
                <div className="susggest-heading">
                  <div className="suggest-heading-left">
                    <h5>Suggestions for you</h5>
                  </div>
                  <div className="suggest-heading-right">
                    <a href="##">see all</a>
                  </div>
                </div>
                <div className="suggest-user-wraper">
                  <SuggestUser />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {modal && (
        <IgModal hide={setModal}>
          <div className="modal-head">
            <h5>Create New Post</h5>
            <hr />
          </div>
          <div className="ig-modal-body">
            <form onSubmit={handlePostCreateSubmit}>
              <div className="my-1">
                <label htmlFor="">User Name</label>
                <input
                  type="text"
                  value={postCreate.username}
                  onChange={handlePostInput}
                  name="username"
                  className="form-control"
                />
              </div>
              <div className="my-1">
                <label htmlFor="">User Photo</label>
                <input
                  type="text"
                  value={postCreate.userphoto}
                  onChange={handlePostInput}
                  name="userphoto"
                  className="form-control"
                />
              </div>

              <div className="my-1">
                <label htmlFor="">Location</label>
                <input
                  type="text"
                  value={postCreate.location}
                  onChange={handlePostInput}
                  name="location"
                  className="form-control"
                />
              </div>
              <div className="my-1">
                <label htmlFor="">Post Image</label>
                <input
                  type="text"
                  value={postCreate.postimage}
                  onChange={handlePostInput}
                  name="postimage"
                  className="form-control"
                />
              </div>
              <div className="my-1">
                <label htmlFor="">Post Desc</label>
                <textarea
                  value={postCreate.postdesc}
                  onChange={handlePostInput}
                  name="postdesc"
                  className="form-control"
                ></textarea>
              </div>
              <div className="my-1 text-center">
                <button type="submit" className="btn btn-success">
                  Publish Now
                </button>
              </div>
            </form>
          </div>
        </IgModal>
      )}
    </>
  );
};
