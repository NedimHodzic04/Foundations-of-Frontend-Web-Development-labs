let password = document.getElementById("password");
let power = document.getElementById("power-point");

password.addEventListener("input", function() {
    let value = password.value;
    let point = 0;

        if (/[0-9]/.test(value)) point++;
        if (/[a-z]/.test(value)) point++;
        if (/[A-Z]/.test(value)) point++;
        if (/[^0-9a-zA-Z]/.test(value)) point++;
    

    let width = (point * 25) + "%";



    power.style.width = width;
    power.style.backgroundColor = ["#D73F40", "#DC6551", "#F2B84F", "#BDE952", "#3ba62f"][point];
});
