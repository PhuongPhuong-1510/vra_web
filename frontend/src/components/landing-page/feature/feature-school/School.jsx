import React from 'react';
import './School.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import section1Img from '../../../../imgs/feature-school/section1.svg';
import section2Img from '../../../../imgs/feature-school/section2.svg';
import section3Img from '../../../../imgs/feature-school/section3.svg';
import section4BgImg from '../../../../imgs/feature-school/section3-bg.svg';
import content2RightImg from '../../../../imgs/feature-doctor/content2-right.svg';


const School = () => {
  return (
    <div className="school">
      <link
        href="https://fonts.googleapis.com/css2?family=Puppies+Play&display=swap"
        rel="stylesheet"
      />
      <div className="section1">
        <div className="content">
          <h1>Chăm sóc sức khỏe tâm thần trẻ em sáng tạo cho các thành viên của bạn.</h1>
          <p>
            Liệu pháp kỹ thuật số dựa trên chỉ số chơi game được xác nhận lâm sàng để hạnh phúc, trẻ em khỏe mạnh hơn
          </p>
        </div>
        <img src={section1Img} alt="section1" />
      </div>

      <div className="section2">
        <img src={section2Img} alt="section2" />
      </div>

      <div className="section3">
        <h1>Chúng tôi cung cấp</h1>
        <img src={section3Img} alt="section3" />
      </div>

      <div className="section4">
        <div className="background">
          <img src={section4BgImg} alt="background" />
        </div>

        <div className="section3-content1">
          <p>Bao gồm chương trình chuyên nghiệp của VRA</p>
          <p>Trò chơi</p>
          <p>Giúp trẻ xây dựng khả năng điều tiết cảm xúc và kỹ năng đối phó mạnh mẽ hơn thông qua trò chơi và thực hành</p>
        </div>

        <div className="section3-content2">
          <div className="content2-right">
            <img src={content2RightImg} alt="content2-right" />
          </div>
          <div className="content2-left">
            <p>
              Chương trình trị liệu tăng cường các phiên cá nhân và nhóm của bạn với các trò chơi và hoạt động được CBT thông báo
            </p>
          </div>
        </div>

        <div className="section3-content3">
          <p>Hãy để chúng tôi giúp bạn bắt đầu!</p>
        </div>
      </div>
    </div>
  );
};

export default School;
