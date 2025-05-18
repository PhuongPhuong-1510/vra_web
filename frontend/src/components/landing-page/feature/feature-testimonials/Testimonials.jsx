import './Testimonials.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import section1Img from '../../../../imgs/feature-testimonials/section1.svg';
import section2Img from '../../../../imgs/feature-testimonials/section2.svg';
import endImg from '../../../../imgs/feature-testimonials/end.svg';
import section3Img from '../../../../imgs/feature-testimonials/section3.svg';

const Testimonials = () => {
    return (
        <div className="testimonials">
            <div className="section1">
                <div className="section1-content">
                    <h1>KHOẢNH KHẮC</h1>
                    <p>Khi con bạn đấu tranh, thế giới của bạn dừng lại. VRA được xây dựng cho trẻ em và cho những người lớn yêu thích chúng</p>
                    <p>Sức mạnh của VRA là trong những khoảnh khắc này</p>
                </div>
                <img src={section1Img} alt="section1" />
            </div>

            <div className="section2">
                <img src={endImg} alt="end" />
                <img src={section2Img} alt="section2" />
                <p>Con trai chúng tôi phải vật lộn với tâm trạng thay đổi nhanh chóng, hành vi chống đối và bùng nổ.Chúng tôi đã thử anh ta trên mọi loại thuốc, nhưng tác dụng phụ vượt xa lợi ích. Đó là khi chúng tôi chuyển sang VRA. Nó thực sự đã thay đổi thế giới của chúng ta</p>
            </div>

            <div className="section3">
                <p>Khách hàng của chúng tôi</p>
                <img src={section3Img} alt="section3" />
            </div>
        </div>
    );
};

export default Testimonials;