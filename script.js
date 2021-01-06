clearbox.onclick = function () {
    const boarderBox = document.getElementById("boardbox");
    while (boarderBox.firstChild) {
        boarderBox.removeChild(boarderBox.firstChild);
    }
};

delbox.onclick = function () {
    const boarderBox = document.getElementById('boardbox');
    if (boarderBox.lastElementChild) {
        boarderBox.removeChild(boarderBox.lastElementChild);
    }
};

insbox.onclick = function () {
    let box = document.createElement('div');
    box.className = 'box';
    box.innerText = boardbox.childElementCount + 1;
    boardbox.appendChild(box);

};