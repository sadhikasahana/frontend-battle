let percent = 0;
const leftBar = document.querySelector(".left-bar");
const rightBar = document.querySelector(".right-bar");
const percentDisplay = document.getElementById("percent");
const wrapper = document.querySelector(".progress-wrapper");

function formatNumber(num) {
  return String(num).padStart(3, "0");
}

function updateLoader() {
  percent += 1;
  percentDisplay.textContent = formatNumber(percent);

  if (percent <= 99) {
    leftBar.style.width = percent + "%";
    rightBar.style.width = 100 - percent + "%";

    if (percent === 99) {
      setTimeout(transformBarToL, 500);
    }

    setTimeout(updateLoader, 50);
  }
}

function transformBarToL() {
  leftBar.style.display = "none";
  rightBar.style.display = "none";

  const leftPiece = document.createElement("div");
  leftPiece.classList.add("bar-piece", "bar-left");

  const rightPiece = document.createElement("div");
  rightPiece.classList.add("bar-piece", "bar-right");

  wrapper.appendChild(leftPiece);
  wrapper.appendChild(rightPiece);

  setTimeout(() => {
    leftPiece.style.transform = "translateY(-50%) rotate(90deg)";
  }, 100);
}

updateLoader();
