// Lấy đối tượng input và img
var inputImage = document.getElementById("inputImage");
var previewImage = document.getElementById("previewImage");

// Thiết lập sự kiện thay đổi cho input
inputImage.addEventListener("change", function() {
  // Kiểm tra xem người dùng đã chọn ảnh chưa
  if (inputImage.files && inputImage.files[0]) {
    // Tạo một đối tượng FileReader để đọc file ảnh
    var reader = new FileReader();

    // Thiết lập sự kiện load để cập nhật hình ảnh trên trang web
    reader.onload = function(e) {
      previewImage.src = e.target.result;
    }

    // Đọc file ảnh và hiển thị lên trang web
    reader.readAsDataURL(inputImage.files[0]);
  }
});