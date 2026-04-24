import "./ShowroomVideo.css";
import banner7 from "../../assets/banner7.jpg";
import { FaClipboardList, FaComments, FaBullseye, FaTag } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { FaCar, FaDollarSign } from "react-icons/fa";
import bangiaoxe1 from "../../assets/bangiaoxe1.jpg";
import bangiaoxe2 from "../../assets/bangiaoxe2.jpg";
import spaBg from "../../assets/rollsroyce2.jpg";
import certificateImg from "../../assets/giaychungnhan.jpg";

export default function ShowroomVideo() {
  return (
    <>
      {/* ===== SECTION 1: SHOWROOM ===== */}
      <section
        className="showroom"
        style={{ backgroundImage: `url(${banner7})` }}
      >
        <div className="showroom-overlay"></div>

        <div className="showroom-container">

          {/* LEFT */}
          <div className="showroom-item">
            <div className="showroom-rect">
              <div className="icon">
                <FiSearch className="search" />
                <FaCar className="car" />
              </div>
              <h2>Bạn đang tìm kiếm một chiếc xe hơi?</h2>
            </div>

            <button className="showroom-btn">
              📞 NHẬN TƯ VẤN MUA XE
            </button>
          </div>

          {/* RIGHT */}
          <div className="showroom-item">
            <div className="showroom-rect">
              <div className="icon">
                <FaDollarSign className="money" />
                <FaCar className="car" />
              </div>
              <h2>Bạn có muốn bán một chiếc xe hơi?</h2>
            </div>

            <button className="showroom-btn">
              📞 NHẬN TƯ VẤN BÁN XE
            </button>
          </div>

        </div>
      </section>

      {/* ===== SECTION 2: VIDEO ===== */}
      <section className="video-section">

        <h2 className="section-title">Video xe</h2>

        <div className="video-container">

          <div className="video-item">
            <iframe
              src="https://www.youtube.com/embed/bsJNHz6sNlA"
              title="video1"
              allowFullScreen
            ></iframe>
          </div>

          <div className="video-item">
            <iframe
              src="https://www.youtube.com/embed/3OQRzkqSNks"
              title="video2"
              allowFullScreen
            ></iframe>
          </div>

        </div>

      </section>
      {/* ===== SECTION: BÀN GIAO XE ===== */}
      <section className="delivery-section">
        <h2 className="section-title">Bàn Giao Xe</h2>

        <div className="delivery-container">
          <img src={bangiaoxe1} alt="ban giao 1" />
          <img src={bangiaoxe2} alt="ban giao 2" />
        </div>
      </section>

      {/* ===== SECTION: GIỚI THIỆU SHOWROOM ===== */}
      <section className="intro-section">
        <h2 className="section-title">Giới thiệu Showroom</h2>

        <div className="intro-video">
          <iframe
            src="https://www.youtube.com/embed/OGEUVDrvUbI"
            title="showroom"
            allowFullScreen
          ></iframe>
        </div>
      </section>
          <div className="why-section">
      <div className="overlay"></div>

      <div className="content">
        <h2>TẠI SAO NÊN MUA XE TẠI AUTO CAR?</h2>
        <div className="line"></div>

        <div className="why-grid">

          <div className="why-item">
            <div className="icon"><FaClipboardList /></div>
            <div className="why-text">
              <h3>CAM KẾT</h3>
              <p>
                Máy móc nguyên bản, không đâm đụng, không ngập nước,
                giấy tờ chuẩn pháp lý, không tranh chấp, không phạt nguội.
              </p>
            </div>
          </div>

          <div className="why-item">
            <div className="icon"><FaComments /></div>
            <div className="why-text">
              <h3>NGƯỜI NỔI TIẾNG</h3>
              <p>
                Với hơn 10 năm hoạt động, showroom được nhiều khách hàng
                nổi tiếng tin tưởng và lựa chọn.
              </p>
            </div>
          </div>

          <div className="why-item">
            <div className="icon"><FaBullseye /></div>
            <div className="why-text">
              <h3>THƯƠNG HIỆU</h3>
              <p>
                Đa dạng các dòng xe cao cấp như Lamborghini, Bentley,
                Ferrari... đáp ứng mọi nhu cầu khách hàng.
              </p>
            </div>
          </div>

          <div className="why-item">
            <div className="icon"><FaTag /></div>
            <div className="why-text">
              <h3>TÀI CHÍNH</h3>
              <p>
                Hỗ trợ trả góp linh hoạt, tư vấn xe phù hợp với ngân sách
                và nhu cầu của từng khách hàng.
              </p>
            </div>
          </div>

        </div>

        <button className="cta-btn">
          📞 NHẬN TƯ VẤN XE THEO SỞ THÍCH
        </button>
      </div>
    </div>
<div
      className="spa-section"
      style={{ backgroundImage: `url(${spaBg})` }}
    >
      <div className="spa-overlay"></div>

      <div className="spa-content">

        {/* BOX */}
        <div className="spa-box">
          <h1>MAGIC AUTO SPA</h1>
          <h3>CHĂM SÓC XE VÀ PHỦ CERAMIC</h3>
          <p>
            Đem tới khách hàng một dịch vụ chăm sóc, làm đẹp xe đúng
            cách, đạt tiêu chuẩn cao nhất.
          </p>
        </div>

        {/* BUTTON RIÊNG */}
        <button className="spa-btn">
          📞 ĐẶT LỊCH CHĂM SÓC XE
        </button>

      </div>
    </div>
    <section className="cert-map-section">

      <div className="cert-map-container">

        {/* LEFT */}
        <div className="cert-box">
          <h2 className="section-title">Giấy chứng nhận</h2>

          <img 
            src={certificateImg} 
            alt="Giấy chứng nhận" 
          />
        </div>

        {/* RIGHT */}
        <div className="map-box">
          <h2 className="section-title">Bản đồ</h2>

          <div className="map-frame">
            <iframe
              src="https://www.google.com/maps?q=Son+Tung+Auto&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

      </div>

    </section>
    </>
  );
}