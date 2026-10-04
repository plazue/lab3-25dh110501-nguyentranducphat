function kiemTraRong(inputElement) {
    const value = inputElement.value.trim();
    const errorElement = document.getElementById('error-' + inputElement.id);
    const label = inputElement.getAttribute('data-label') || 'Thông tin';

    if (value === '') {
        errorElement.textContent = label + ' không được để rỗng';
        return false;
    } else {
        errorElement.textContent = '';
        return true;
    }
}


function kiemTraSoDienThoai() {
    const phoneInput = document.getElementById('phone');
    const errorElement = document.getElementById('error-phone');
    const phoneValue = phoneInput.value.trim();
    const phoneRegex = /^\d{10,}$/;

    if (phoneValue === '') {
        errorElement.textContent = 'Số điện thoại không được để rỗng';
        return false;
    } else if (!phoneRegex.test(phoneValue)) {
        errorElement.textContent = 'Số điện thoại phải từ 10 chữ số trở lên';
        return false;
    } else {
        errorElement.textContent = '';
        return true;
    }
}
function thongBaoDiaChi(loaiDiaChi) {
    alert('Bạn chọn giao hàng tại ' + loaiDiaChi.toLowerCase());
}


function xuLyLuu() {
    const inputsText = document.querySelectorAll('input[data-label]');
    let isValid = true;


    inputsText.forEach(function (input) {
        if (!kiemTraRong(input)) {
            isValid = false;
        }
    });


    if (!kiemTraSoDienThoai()) {
        isValid = false;
    }

    if (isValid) {
        alert('Lưu thông tin thành công');
    } else {
        alert('Thông tin nhập còn sai');
    }
}
