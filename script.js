
document.addEventListener("DOMContentLoaded", function () {

    // แสดงปีปัจจุบัน
    const year = document.getElementById("year");
    year.textContent = new Date().getFullYear();

    // คำนวณอายุจากวันเกิด
    const birthDate = new Date(2008, 5, 26);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();

    const hasBirthdayPassed =
        today.getMonth() > birthDate.getMonth() ||
        (today.getMonth() === birthDate.getMonth() &&
         today.getDate() >= birthDate.getDate());

    if (!hasBirthdayPassed) {
        age--;
    }

    document.getElementById("age").textContent = age + " ปี";

    console.log("Portfolio ของ Tonkla พร้อมใช้งาน!");
});
