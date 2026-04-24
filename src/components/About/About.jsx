import "./About.css";
import showroom from "../../assets/rollsroyce2.jpg";

function About() {
  return (
    <div className="about">

      {/* ===== GIỚI THIỆU ===== */}
      <section className="section">
        <h2>Về chúng tôi</h2>

        <p>
          Auto Car được thành lập từ năm 2007 với hơn 10 năm kinh nghiệm
          trong lĩnh vực xe nhập khẩu cao cấp, đặc biệt là các dòng xe siêu sang
          như Bentley, Rolls-Royce, Lamborghini, Ferrari.
        </p>

        <p>
          Chúng tôi luôn là điểm đến hàng đầu của khách hàng và những người
          đam mê xe tại Việt Nam.
        </p>
      </section>

      {/* ===== VIDEO ===== */}
      <section className="section">
        <h2>Khám phá showroom</h2>

        <div className="video-box">
          <iframe
            src="https://www.youtube.com/embed/OGEUVDrvUbI"
            title="showroom"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* ===== CEO ===== */}
      <section className="section ceo">
        <h2>Chủ tịch Sầm Huệ Minh</h2>

        <div className="ceo-grid">
          <div>
            <p>
              Người đứng sau sự phát triển của Sơn Tùng Auto với niềm đam mê
              và kinh nghiệm sâu sắc trong lĩnh vực xe hơi.
            </p>
          </div>

          <div className="video-box">
            <iframe
              src="https://www.youtube.com/embed/unIaMhgqqhM"
              title="CEO video"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* ===== GIÁ TRỊ ===== */}
      <section className="section">
        <h2>Giá trị cốt lõi</h2>

        <ul className="list">
          <li>Tư vấn xe phù hợp tài chính</li>
          <li>Đa dạng dòng xe cao cấp</li>
          <li>Được nhiều khách hàng tin tưởng</li>
          <li>Hỗ trợ tận tâm</li>
        </ul>
      </section>

      {/* ===== CAM KẾT ===== */}
      <section className="section">
        <h2>Cam kết bằng văn bản</h2>

        <ul className="list">
          <li>Không đâm đụng</li>
          <li>Không ngập nước</li>
          <li>Giấy tờ pháp lý rõ ràng</li>
          <li>Không tranh chấp</li>
          <li>Không phạt nguội</li>
        </ul>
      </section>

      {/* ===== SHOWROOM ===== */}
      <section className="section">
        <h2>Cơ sở vật chất</h2>

        <img src={showroom} alt="" className="showroom-img" />

        <p>
          Showroom tọa lạc tại vị trí trung tâm với diện tích lớn,
          thuận tiện cho việc trưng bày xe.
        </p>
      </section>

      {/* ===== NHÂN SỰ ===== */}
      <section className="section">
        <h2>Đội ngũ nhân sự</h2>

        <p>
          Đội ngũ nhân sự đoàn kết, nhiệt huyết và giàu kinh nghiệm
          trong lĩnh vực xe sang.
        </p>
      </section>

      {/* ===== LỢI ÍCH ===== */}
      <section className="section">
        <h2>Lợi ích khách hàng</h2>

        <div className="benefit-grid">

          <div className="benefit">
            <h3>Bán xe</h3>
            <p>Định giá cao – hỗ trợ thủ tục nhanh</p>
          </div>

          <div className="benefit">
            <h3>Mua xe</h3>
            <p>Xe đầy đủ giấy tờ – giao tận nơi</p>
          </div>

          <div className="benefit">
            <h3>Tư vấn</h3>
            <p>Liên hệ hotline để được hỗ trợ</p>
          </div>

        </div>
      </section>

      {/* ===== REVIEW ===== */}
      <section className="section review">
        <h2>Trải nghiệm khách hàng</h2>

        <p>
          “Tôi không thể tin việc mua xe lại dễ dàng đến vậy.
          Dịch vụ thật sự tuyệt vời.”
        </p>

        <span>– Khách hàng Bentley</span>
      </section>

      {/* ===== MAP ===== */}
      <section className="section">
        <h2>Bản đồ</h2>

        <div className="map-box">
          <iframe src="https://www.google.com/maps?q=Hà Nội&output=embed"></iframe>
        </div>
      </section>

    </div>
  );
}

export default About;