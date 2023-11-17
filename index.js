// 1
function tinhDiem() {
    // Lấy giá trị từ các input và select
    var diemChuan = document.getElementById("diemChuan").value;
    var diemToan = document.getElementById("diem1").value;
    var diemLy = document.getElementById("diem2").value;
    var diemHoa = document.getElementById("diem3").value;
    var khuVuc = document.getElementById("khuVuc").value;
    var doiTuong = document.getElementById("doiTuong").value;

    // Xác định điểm khu vực
    var diemKhuVuc = 0;
    if (khuVuc === "A") {
      diemKhuVuc = 2;
    } else if (khuVuc === "B") {
      diemKhuVuc = 1;
    } else if (khuVuc === "C") {
      diemKhuVuc = 0.5;
    }

    // Xác định điểm đối tượng
    var diemDoiTuong = 0;
    if (doiTuong === "1") {
      diemDoiTuong = 2.5;
    } else if (doiTuong === "2") {
      diemDoiTuong = 1.5;
    } else if (doiTuong === "3") {
      diemDoiTuong = 1;
    }

    // Tính tổng điểm
    var tongDiem = diem1 + diem2 + diem3 + diemKhuVuc + diemDoiTuong;

    // Kiểm tra xem thí sinh đậu hay rớt
    var ketQua = tongDiem >= diemChuan ? "Đậu" : "Rớt";

    // Hiển thị kết quả
    document.getElementById("ketQua").innerHTML = "Kết quả: " + ketQua + "<br>Số điểm đạt được: " + tongDiem;
  };

//   2


function tinhTienDien() {
    // Lấy giá trị từ các input
    var tenKhachHang = document.getElementById("tenKhachHang").value;
    var soKw = document.getElementById("soKw").value * 1;

    // Tính tiền điện theo quy tắc
    var tienDien = 0;
    if (soKw <= 50) {
      tienDien = soKw * 500;
    } else if (soKw <= 100) {
      tienDien = 50 * 500 + (soKw - 50) * 650;
    } else if (soKw <= 150) {
      tienDien = 50 * 500 + 50 * 650 + (soKw - 100) * 850;
    } else if (soKw <= 200) {
      tienDien = 50 * 500 + 50 * 650 + 50 * 850 + (soKw - 150) * 1100;
    } else {
      tienDien = 50 * 500 + 50 * 650 + 50 * 850 + 50 * 1100 + (soKw - 200) * 1300;
    }

    // Hiển thị kết quả
    document.getElementById("ketQuaDien").innerHTML = "Tên Khách Hàng: " + tenKhachHang + "<br>Tiền Điện: " + tienDien + "đ";
  };

  // 3
  function hienThiInputKetNoi() {
    var loaiKhachHang = document.getElementById("loaiKhachHang").value;
    var inputSoKetNoi = document.getElementById("soKetNoi");

    if (loaiKhachHang === "doanhNghiep") {
      inputSoKetNoi.style.display = "block";
    } else {
      inputSoKetNoi.style.display = "none";
    }
  }

  function tinhHoaDon() {
    var maKhachHang = document.getElementById("maKhachHang").value;
    var loaiKhachHang = document.getElementById("loaiKhachHang").value;
    var soKetNoi = parseFloat(document.getElementById("soKetNoi").value) || 0;
    var soKenh = parseFloat(document.getElementById("soKenh").value);

    var phiXuLi, phiDichVuCoBan, phiThueKenh;

    if (loaiKhachHang === "nhaDan") {
      phiXuLi = 4.5;
      phiDichVuCoBan = 20.5;
      phiThueKenh = 7.5 * soKenh;
    } else {
      phiXuLi = 15;
      phiDichVuCoBan = 75 + (soKetNoi > 10 ? (soKetNoi - 10) * 5 : 0);
      phiThueKenh = 50 * soKenh;
    }

    var tongHoaDon = phiXuLi + phiDichVuCoBan + phiThueKenh;

    // Hiển thị kết quả
    document.getElementById("ketQuaCap").innerHTML = "Mã Khách Hàng: " + maKhachHang +
      "<br>Loại Khách Hàng: " + loaiKhachHang +
      "<br>Phí Xử Lí Hóa Đơn: $" + phiXuLi.toFixed(2) +
      "<br>Phí Dịch Vụ Cơ Bản: $" + phiDichVuCoBan.toFixed(2) +
      "<br>Phí Thuê Kênh: $" + phiThueKenh.toFixed(2) +
      "<br><strong>Tổng Hóa Đơn: $" + tongHoaDon.toFixed(2) + "</strong>";
  };

  // 
  function tinhThue() {
    var hoTen = document.getElementById("hoTen").value;
    var thuNhapNam = parseFloat(document.getElementById("thuNhapNam").value);
    var soNguoiPhuThuoc = parseFloat(document.getElementById("soNguoiPhuThuoc").value);

    var thuNhapChiuThue = thuNhapNam - 4000000 - soNguoiPhuThuoc * 1600000;

    var thue = 0;

    if (thuNhapChiuThue <= 60000000) {
      thue = thuNhapChiuThue * 0.05;
    } else if (thuNhapChiuThue <= 120000000) {
      thue = 60000000 * 0.05 + (thuNhapChiuThue - 60000000) * 0.1;
    } else if (thuNhapChiuThue <= 210000000) {
      thue = 60000000 * 0.05 + 60000000 * 0.1 + (thuNhapChiuThue - 120000000) * 0.15;
    } else if (thuNhapChiuThue <= 348000000) {
      thue = 60000000 * 0.05 + 60000000 * 0.1 + 90000000 * 0.15 + (thuNhapChiuThue - 210000000) * 0.2;
    } else if (thuNhapChiuThue <= 624000000) {
      thue = 60000000 * 0.05 + 60000000 * 0.1 + 90000000 * 0.15 + 138000000 * 0.2 + (thuNhapChiuThue - 348000000) * 0.25;
    } else if (thuNhapChiuThue <= 960000000) {
      thue = 60000000 * 0.05 + 60000000 * 0.1 + 90000000 * 0.15 + 138000000 * 0.2 + 276000000 * 0.25 + (thuNhapChiuThue - 624000000) * 0.3;
    } else {
      thue = 60000000 * 0.05 + 60000000 * 0.1 + 90000000 * 0.15 + 138000000 * 0.2 + 276000000 * 0.25 + 336000000 * 0.3 + (thuNhapChiuThue - 960000000) * 0.35;
    }

    // Hiển thị kết quả
    document.getElementById("ketQuaThue").innerHTML = "Họ và Tên: " + hoTen +
      "<br>Thu Nhập Chịu Thuế: " + thuNhapChiuThue.toFixed(2) + " VND" +
      "<br>Thuế Thu Nhập Cá Nhân: " + thue.toFixed(2) + " VND";
  }