import React from 'react';
import './HowItWork.css';
import rightImg from '../../../../imgs/feature-how-it-works/rightImg.svg';
import tilte from '../../../../imgs/feature-how-it-works/title.svg';
import content1 from '../../../../imgs/feature-how-it-works/content1.svg';
import content2 from '../../../../imgs/feature-how-it-works/content2.svg';
import content3 from '../../../../imgs/feature-how-it-works/content3.svg';

// Import font (dành cho font "Puppies Play")
import '@fortawesome/fontawesome-free/css/all.min.css';

const HowItWork = () => {
  return (
    <div className="how-it-works">
      <div className="problem">
        <div className="content-left">
          <h1>VRA hoạt động như thế nào?</h1>
          <h2>
            Con bạn sẽ học cách điều hòa cảm xúc và rèn luyện các kỹ năng bình tĩnh khi đeo cảm biến nhịp tim và chơi trò chơi
          </h2>
        </div>
        <div className="img-right">
          <img src={rightImg} alt="describe" />
        </div>
      </div>

      <div className="title">
        <img src={tilte} alt="background" />
        <p>Làm thế nào VRA hỗ trợ con tôi</p>
      </div>

      <div className="content1">
        <img src={content1} alt="content1" />
      </div>

      <div className="content2">
        <div className="content2-right">
          <h1>Chơi, thực hành, áp dụng</h1>
          <p>
            Bằng cách thực hành các kỹ năng bình tĩnh trong trò chơi, trẻ em xây dựng một hộp công cụ kỹ năng để sử dụng trong cuộc sống hàng ngày của họ. Theo thời gian, trẻ em tiếp thu những kỹ năng này và có thể dễ dàng áp dụng chúng vào mọi tình huống.
          </p>
        </div>
        <div className="content2-left">
          <img src={content2} alt="content2" />
        </div>
      </div>

      <div className="content3">
        <div className="content3-left">
          <img src={content3} alt="content3" />
        </div>
        <div className="content3-right">
          <h1>Theo dõi sự tiến bộ của con bạn</h1>
          <p>
            VRA - Ứng dụng dành cho phụ huynh cung cấp thông tin chi tiết về sự tiến bộ của con bạn và bao gồm các bài viết và tài nguyên để hỗ trợ sự phát triển của con bạn.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
