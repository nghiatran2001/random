let random;
let arr = ["CẮT ĐÔI NỖI SẦU", "ĐẬP VỠ CÂY ĐÀN", "BAO CÔNG XỬ ÁN"];
document.getElementById("roll").onclick = function () {
  random = arr[Math.floor(Math.random() * arr.length)];
  document.getElementById("label").innerHTML = random;
};
