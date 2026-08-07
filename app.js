const days = [
    "Chủ Nhật",
    "Thứ Hai",
    "Thứ Ba",
    "Thứ Tư",
    "Thứ Năm",
    "Thứ Sáu",
    "Thứ Bảy"
];

function pad(n){
    return n.toString().padStart(2,"0");
}

function updateClock(){

    const now = new Date();

    document.getElementById("date").innerHTML =
        now.getFullYear() + "-" +
        pad(now.getMonth()+1) + "-" +
        pad(now.getDate()) + " " +
        days[now.getDay()];

    document.getElementById("clock").innerHTML =
        pad(now.getHours()) + ":" +
        pad(now.getMinutes()) + ":" +
        pad(now.getSeconds());

}

updateClock();

setInterval(updateClock,1000);
