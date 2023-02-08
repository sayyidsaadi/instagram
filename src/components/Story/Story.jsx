import "./Story.scss";
import arif from "../../images/arif.jpg";
import naima from "../../images/naima.jpg";
import raisa from "../../images/raisa.png";
import roman from "../../images/roamn.png";
import romiz from "../../images/romiz.jpg";
import stxx from "../../images/stxx.jpg";

const Story = () => {
  return (
    <>
      <div className="story-item">
        <div className="story">
          <img src={arif} alt="" />
          <div className="user-name">
            <p>singer_arif</p>
          </div>
        </div>

        <div className="story">
          <img src={roman} alt="" />
          <div className="user-name">
            <p>romanordomez</p>
          </div>
        </div>
        <div className="story">
          <img src={raisa} alt="" />
          <div className="user-name">
            <p>raisa</p>
          </div>
        </div>
        <div className="story">
          <img src={naima} alt="" />
          <div className="user-name">
            <p>naima</p>
          </div>
        </div>
        <div className="story">
          <img src={stxx} alt="" />
          <div className="user-name">
            <p>stxx</p>
          </div>
        </div>
        <div className="story">
          <img src={romiz} alt="" />
          <div className="user-name">
            <p>ramiz</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Story;
