import React from 'react';
import './Doctor.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import backgroundImg from '../../../../imgs/feature-doctor/background.svg';
import content1Img from '../../../../imgs/feature-doctor/section1-content1.svg';
import content2Img from '../../../../imgs/feature-doctor/section1-content2.svg';
import section2Title1Img from '../../../../imgs/feature-doctor/image13.svg';
import section2Title2Img from '../../../../imgs/feature-doctor/image14.svg';
import section3BgImg from '../../../../imgs/feature-doctor/section3-bg.svg';
import content2RightImg from '../../../../imgs/feature-doctor/content2-right.svg';

const Doctor = () => {
  return (
    <div className="doctor">
      <link
        href="https://fonts.googleapis.com/css2?family=Puppies+Play&display=swap"
        rel="stylesheet"
      />

      <div className="section1">
        <div className="background">
          <img src={backgroundImg} alt="background" />
        </div>

        <div className="content">
          <div className="content1">
            <div className="content-left">
              <h1>
                Bạn làm việc chăm chỉ để hỗ trợ sức khỏe tâm thần của trẻ em. <br />
                Hãy để chúng tôi giúp bạn.
              </h1>
              <p>
                Trao quyền cho trẻ khám phá cảm xúc và tăng cường kỹ năng điều tiết cảm xúc.
              </p>
            </div>
            <div className="content-right">
              <img src={content1Img} alt="content1" />
            </div>
          </div>

          <div className="content2">
            <div className="content2-left">
              <img src={content2Img} alt="content2" />
            </div>
            <div className="content2-right">
              <p>Trò chơi được thiết kế cho trẻ em từ 6-14 tuổi</p>
            </div>
          </div>
        </div>
      </div>

      <div className="section2">
        <p className="section2-title1">
          Chúng tôi được xác nhận lâm sàng cho trẻ em có
        </p>
        <img src={section2Title1Img} alt="section2-title1" />
        <p className="section2-title2">
          Giúp trẻ xây dựng
        </p>
        <img src={section2Title2Img} alt="section2-title2" />
      </div>

      <div className="section3">
        <div className="background">
          <img src={section3BgImg} alt="background" />
        </div>
        <div className="section3-content1">
          <p>Bao gồm chương trình chuyên nghiệp của VRA</p>
          <p>Trò chơi</p>
          <p>
            Giúp trẻ xây dựng khả năng điều tiết cảm xúc và kỹ năng đối phó mạnh mẽ hơn thông qua trò chơi và thực hành
          </p>
        </div>
        <div className="section3-content2">
          <div className="content2-right">
            <img src={content2RightImg} alt="content2-right" />
          </div>
          <p>
            Chương trình trị liệu tăng cường các phiên cá nhân và nhóm của bạn với các trò chơi và hoạt động được CBT thông báo
          </p>
        </div>
        <div className="section3-content3">
          <p>Hãy để chúng tôi giúp bạn bắt đầu!</p>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
