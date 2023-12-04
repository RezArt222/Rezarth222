// Mendefinisikan variabel untuk elemen HTML yang akan digunakan
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// Menggambar bunga
function drawFlower(x, y, radius, petalColor, centerColor) {
  // Menggambar kelopak bunga
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.fillStyle = petalColor;
  ctx.fill();

  // Menggambar pusat bunga
  ctx.beginPath();
  ctx.arc(x, y, radius / 3, 0, 2 * Math.PI);
  ctx.fillStyle = centerColor;
  ctx.fill();
}

// Menggambar banyak bunga di canvas
function drawFlowerField() {
  // Menggambar bunga pertama
  drawFlower(100, 100, 50, "red", "yellow");

  // Menggambar bunga kedua
  drawFlower(200, 200, 40, "pink", "white");

  // Menggambar bunga ketiga
  drawFlower(300, 150, 60, "purple", "blue");
}

// Memanggil fungsi untuk menggambar bunga di canvas
drawFlowerField();Menggambar