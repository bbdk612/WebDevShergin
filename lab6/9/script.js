let DND = document.querySelector(".dragNDrop");

DND.ondrastart = () => {
  return false;
};

function move(e) {
  DND.style.left = e.pageX - DND.offsetWidth / 2 + "px";
  DND.style.top = e.pageY - DND.offsetHeight / 2 + "px";
}

DND.addEventListener('mousedown', (e) => {
  move(e);

  document.onmousemove = move;

  DND.onmouseup = function() {
    document.onmousemove = null;
    DND.onmouseup = null;
  }
})

