import React from 'react';
import './Healthcare.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import section1Img from '../../../../imgs/feature-healthcare/section1.svg';
import content1Img from '../../../../imgs/feature-healthcare/content1.svg';
import content2Img from '../../../../imgs/feature-healthcare/content2.svg';
import content3Img from '../../../../imgs/feature-healthcare/content3.svg';

const Healthcare = () => {
    return (
        <div className="healthcare">
            {/* Section 1 */}
            <div className="section1">
                <div className="section1-left">
                    <h2>Đem VRA đến trường của bạn</h2>
                    <p>
                        Chương trình dựa trên kỹ thuật số, được xác nhận lâm sàng sử dụng phản hồi sinh học để xây dựng sức khỏe cảm xúc.
                    </p>
                    <p>
                        Tìm hiểu làm thế nào trường học của bạn có thể giúp hỗ trợ trẻ em hạnh phúc hơn, khỏe mạnh hơn. Hãy làm việc cùng nhau để giúp trẻ em phát triển.
                    </p>
                </div>
                <div className="section1-right">
                    <img src={section1Img} alt="VRA ở trường học" />
                </div>
            </div>

            {/* Section 2 */}
            <div className="section2">
                <h3 className="section2-title">
                    VRA giảm bùng phát, tăng kiểm soát cảm xúc và cải thiện phản ứng với căng thẳng
                </h3>

                <div className="section2-wrapper">
                    {/* Content 1 */}
                    <div className="section2-content">
                        <img src={content1Img} alt="Cảm xúc và tự tin" />
                        <p>
                            Trò chơi VRA được liên kết với các chiến lược làm dịu trong các tình huống thực tế
                        </p>
                    </div>

                    {/* Content 2 */}
                    <div className="section2-content">
                        <img src={content2Img} alt="Lợi ích cho ADHD" />
                        <p>
                            VRA cải thiện kết quả cho trẻ ADHD
                        </p>
                    </div>

                    {/* Content 3 */}
                    <div className="section2-content">
                        <img src={content3Img} alt="Trẻ bị loại khối lớp" />
                        <p>
                            VRA cải thiện kết quả cho trẻ ADHD
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Healthcare;
