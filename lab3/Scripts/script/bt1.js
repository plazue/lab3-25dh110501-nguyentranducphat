
function updateSotruong() {
    var chuyenNganh = document.getElementById("chuyennganh").value;
    var soTruongElem = document.getElementById("sotruong");

    if (chuyenNganh === "Hệ thống") {
        soTruongElem.innerText = "Phân tích & Thiết kế";
    } else if (chuyenNganh === "Phần mềm") {
        soTruongElem.innerText = "Lập trình";
    } else if (chuyenNganh === "Mạng máy tính") {
        soTruongElem.innerText = "Quản lý mạng";
    }
}


function updateNgoaiNgu() {
    var checkboxes = document.querySelectorAll('input[name="ngoaingu"]:checked');
    var selectedLangs = [];

    checkboxes.forEach(function (cb) {
        selectedLangs.push(cb.value);
    });

    var resElem = document.getElementById("res-ngoaingu");
    resElem.innerText = selectedLangs.join(" và ");
}


function validateForm(event) {
    event.preventDefault(); 

    var isValid = true;

    
    var masv = document.getElementById("masv").value.trim();
    var hoten = document.getElementById("hoten").value.trim();
    var tuoi = document.getElementById("tuoi").value.trim();


    var errMasv = document.getElementById("err-masv");
    var errHoten = document.getElementById("err-hoten");
    var errTuoi = document.getElementById("err-tuoi");
    var statusMsg = document.getElementById("status-msg");


    errMasv.innerText = "";
    errHoten.innerText = "";
    errTuoi.innerText = "";
    statusMsg.innerText = "";


    if (masv.length !== 10) {
        errMasv.innerText = "Mã sinh viên gồm 10 ký tự";
        isValid = false;
    }


    if (hoten === "" || hoten.length >= 30) {
        errHoten.innerText = "Họ tên không rỗng và < 30 ký tự";
        isValid = false;
    }


    var tuoiNum = Number(tuoi);
    if (tuoi === "" || isNaN(tuoiNum) || tuoiNum < 18) {
        errTuoi.innerText = "Tuổi phải 18 trở lên";
        isValid = false;
    }

    if (!isValid) {
        statusMsg.innerText = "Bạn phải nhập lại cho đúng";
        statusMsg.className = "msg-status error"; 
    } else {
        statusMsg.innerText = "Bạn đã đăng ký thành công";
        statusMsg.className = "msg-status success";
    }

    return isValid;
}