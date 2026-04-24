import "./Footer.css";
import logo from "../../assets/logo2.png";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* ===== LOGO ===== */}
        <div className="footer-col logo-col">
          <img src={logo} alt="logo" className="footer-logo" />
          <h2>AUTO CAR</h2>
          <p className="logo-desc">
            Showroom xe sang - Đẳng cấp & Uy tín
          </p>
        </div>

        {/* ===== HOTLINE ===== */}
        <div className="footer-col">
          <h3>HOTLINE TƯ VẤN</h3>
          <p>📞 Mrs.Hoài 0935 64 6666</p>
          <p>📞 Mr.Khoa 0985 90 8888</p>
        </div>

        {/* ===== HỖ TRỢ ===== */}
        <div className="footer-col">
          <h3>HỖ TRỢ KHÁCH HÀNG</h3>
          <ul>
            <li>Liên hệ</li>
            <li>Chính sách bảo mật</li>
            <li>Điều khoản hoạt động</li>
            <li>Bán xe</li>
          </ul>
        </div>

        {/* ===== ABOUT ===== */}
        <div className="footer-col">
          <h3>VỀ CHÚNG TÔI</h3>
          <ul>
            <li>Dịch vụ</li>
            <li>So sánh xe</li>
            <li>Tin tức</li>
            <li>Về chúng tôi</li>
          </ul>
        </div>

      </div>

      {/* ===== LINE ===== */}
      <div className="footer-line"></div>

      {/* ===== BOTTOM ===== */}
      <div className="footer-bottom">
        <p>
          Copyright © 2007 
          <span> Auto Car </span> 
          All Rights Reserved.
        </p>

        <div className="social">
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-youtube"></i>
          <i className="fa-brands fa-pinterest-p"></i>
        </div>
      </div>

    </footer>
  );
}

export default Footer;