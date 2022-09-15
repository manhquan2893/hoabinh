import { useState } from 'react';
import './App.scss';

function App() {
  const [register, setRegister] = useState(false)
  return (
    <div className="App">
      <div className="header">
        <div className="container">
          <div className="logo">
            <img src="/images/logo.jpg" alt="" />
          </div>
          <div className="navbar">
            <div className="item" onClick={() => setRegister(false)}>Trang chủ</div>
            <div className="item">Mảng hợp tác</div>
            <div className="item">Tin tức</div>
            <div className="item">Liên hệ</div>
            <div className="item" onClick={() => setRegister(true)}>Đăng ký</div>
          </div>
        </div>
      </div>
      <div className="banner">
        {/* <img src="/images/banner.jpg" alt="" /> */}
      </div>
      {
        register ? (
          <Register />
        ): (
          <Home></Home>
        )
      }
    </div>
  );
}
function Register(){
  return (
    <div className='register'>
      <div className="register-row">
        <div className="label">Tên công ty</div>
        <div className="value">
          <input type="text" />
        </div>
      </div>
      <div className="register-row">
        <div className="label">Mã số thuế</div>
        <div className="value">
          <input type="text" />
        </div>
      </div>
      <div className="register-row">
        <div className="label">Ngày cấp</div>
        <div className="value">
          <input type="text" />
        </div>
      </div>
      <div className="register-row">
        <div className="label">Địa chỉ</div>
        <div className="value">
          <input type="text" />
        </div>
      </div>
      <div className="register-row">
        <div className="label">Ngành công nghiệp</div>
        <div className="value">
        <select name="cars" id="cars">
          <option value="volvo">Cơ khí</option>
          <option value="saab">Điện - điện tử</option>
          <option value="opel">Nhựa - cao su</option>
          <option value="audi">Vật liệu - bao bì -in ấn</option>
          <option value="audi">Khác</option>
        </select>
        </div>
      </div>
      <div className="register-row">
        <div className="label">Chi tiết lĩnh vực kinh doanh</div>
        <div className="value">
        <select name="aaa" id="cars">
          <option value="volvo">chế tạo khuôn đúc - phụ tùng khuôn đúc</option>
          <option value="saab">phụ tùng khuôn mẫu</option>
          <option value="opel">xe hơi, phụ tùng liên quan</option>
          <option value="audi">gia công dập, xử lý kim loại</option>
          <option value="audi">rèn, đúc, đúc khuôn</option>
        </select>
        </div>
      </div>
      <div className="footer register-row">
        <div className="register-button">Đăng ký</div>
      </div>
    </div>
  )
}

function Home(){
  return (
    <>
      <div className="section1">
        <div className='container'>
          <div className="section-title">
            <div className="text">VỀ <span>CHÚNG TÔI</span></div>
          </div>
          <div className="content">
            <div className="left">
              <img src="/images/about.jpg" alt="" />
            </div>
            <div className="right">
              <div className="item">
                <img src="/images/section2-check.svg" alt="" />
                <p> Hòa Bình là nhà thầu xây dựng uy tín và chất lượng hàng đầu tại Việt Nam
                ,đã thành công với nhiều công trình trọng điểm trong và ngoài nước như
                  Times Square, Estella Heights, Nhà ga mở rộng sân bay quốc tế Tân Sơn Nhất...
                  </p>
                </div>
                <div className="item">
                <img src="/images/section2-check.svg" alt="" />
                  <p>Đội ngũ kỹ sư đầy tâm huyết, dày dặn kinh nghiệm . Mạng lưới công ty thành viên : Trang trí mộc Hòa Bình (MBH), Xây dựng nhôm kính Anh Việt (AHA), Sơn Hòa Bình (HBP), cơ điện Jesco Hòa Bình (JHE), Tư vấn Thiết kế Hòa Bình (HBA), xây dựng Hạ tầng Hòa Bình (HBI), Máy móc thiết bị (Matec),...</p>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section2">
        <div className="section-title">
            <div className="text">Mảng <span>hợp tác</span></div>
          </div>
        <div className="section2-content">
          <div className="section2-left">
            <div className="section2-title">Trở thành nhà cung cấp</div>
            <div className="section2-column-content">
              <div className="box">
                <img src="/images/section2-check.svg" alt="" />
                <div className="box-content">Luôn chào đón những nhà cung cấp có năng lực, sản phẩm tốt, giá cả hay tổng chi phí sở hữu tốt</div>
              </div>
              <div className="box">
                <img src="/images/section2-check.svg" alt="" />
                <div className="box-content">Hòa Bình xây dựng bộ tiêu chuẩn nhà cung cấp cho các mặt hàng chiến lược (có giá trị mua cao).</div>
              </div>
              <div className="box">
                <img src="/images/section2-check.svg" alt="" />
                <div className="box-content">Tất cả các nhà cung cấp đều phải có hồ sơ được lưu trữ và cập nhật thường xuyên.</div>
              </div>
            </div>
          </div>
          <div className="section2-right">
          <div className="section2-title">Trở thành nhà thầu phụ</div>
            <div className="section2-column-content">
              <div className="box">
                <img src="/images/section2-check.svg" alt="" />
                <div className="box-content">Hòa Bình sẽ cho vay đầu tư thiết bị thi công nhằm phục vụ công việc hiện tại với mức vay tối đa 10% so với hợp đồng.</div>
              </div>
              <div className="box">
                <img src="/images/section2-check.svg" alt="" />
                <div className="box-content">Phòng Nhân sự của Hòa Bình sẽ hỗ trợ Nhà thầu phụ trong việc tuyển dụng cán bộ kỹ thuật (khi có yêu cầu) để nâng cao trình độ đội ngũ quản lý.</div>
              </div>
              <div className="box">
                <img src="/images/section2-check.svg" alt="" />
                <div className="box-content">Hòa Bình chấp thuận cho Nhà thầu phụ tạm ứng tối đa khi kí hợp đồng. Giải tỏa bảo lưu ngay sau khi quyết toán hoặc khi có hợp đồng mới.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
