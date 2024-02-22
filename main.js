const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

function generateRandomString(length) {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

const card = document.querySelector("#bg");
card.innerHTML = generateRandomString(7500);

function move(e) {
    e.innerHTML = generateRandomString(7500);
}

card.onmousemove = function(e) {
    move(this);
}