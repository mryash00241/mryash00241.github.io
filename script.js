setInterval(function () {
  document.querySelector("#timeElement").innerHTML = new Date().toLocaleString();
}, 1000);

dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

document.getElementById("openButton").addEventListener("click", function() {
  document.getElementById("mydiv").style.display = "flex";
});

document.getElementById("closeButton").addEventListener("click", function() {
  document.getElementById("mydiv").style.display = "none";
});

document.getElementById("previewButton").addEventListener("click", function() {
  const previewFrame = document.getElementById("previewFrame");
  previewFrame.src = "https://yash00241.github.io";
  document.getElementById("previewBlock").style.display = "flex";
  dragElement(document.getElementById("previewBlock"));
});

document.getElementById("previewCloseButton").addEventListener("click", function() {
  document.getElementById("previewBlock").style.display = "none";
});

document.getElementById("instagramButton").addEventListener("click", function() {
  window.open("https://www.instagram.com/mr.yash00241", "_blank");
});
