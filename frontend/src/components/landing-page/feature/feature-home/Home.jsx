import React from "react";
import "./Home.css";
import illustrationImg from '../../../../imgs/landing-page/img-illustration.svg';
import botomImg from '../../../../imgs/landing-page/bottom.svg';
import bonus1Img from '../../../../imgs/landing-page/bonus1.svg';
import bonusLeftImg from '../../../../imgs/landing-page/bonus-left.svg';

const Home = () => {
  return (
    <div className="home">
      <link
        href="https://fonts.googleapis.com/css2?family=Puppies+Play&display=swap"
        rel="stylesheet"
      />

      <div className="container">
        <div className="container-left">
          <div className="content">
            <p className="headline">Chăm sóc sức khỏe tâm thần</p>
            <p className="sub-head">Được xây dựng cho trẻ em</p>
            <p className="description">
              Chúng tôi giúp trẻ kiểm soát cảm xúc, xây dựng sự tự tin và cải thiện sức khỏe tinh thần đồng thời hỗ trợ cả gia đình.
            </p>
          </div>
          <div className="img-illustration">
            <img src={illustrationImg} alt="img-illustration" />
          </div>
        </div>
      </div>

      <div className="container-bottom">
        <img src={botomImg} alt="bottom" />
      </div>

      <div className="bonus1">
        <img src={bonus1Img} alt="bonus1" />
      </div>

      <div className="bonus2">
        <div className="bonus-left">
          <img src={bonusLeftImg} alt="bonus-left" />
        </div>

        <div className="bonus-right">
          <p className="bonus-title">Công cụ dành cho cha mẹ / người chăm sóc</p>
          <p className="bonus-content">
            Theo dõi tiến trình, truy cập tài nguyên và tham gia cộng đồng sử dụng ứng dụng dành cho phụ huynh
          </p>
          <p className="bonus-title">Học tập trên và ngoài màn hình</p>
          <p className="bonus-content">
            Các trò chơi và hoạt động giúp cả gia đình phát triển và rèn luyện các kỹ năng cảm xúc cơ bản.
          </p>
        </div>
      </div>

      <div className="footer">
        <p>Khám phá cách chúng tôi thay đổi cuộc sống</p>
      </div>
    </div>
  );
};

export default Home;
