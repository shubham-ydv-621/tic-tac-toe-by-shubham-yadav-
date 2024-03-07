let boxes = document.querySelectorAll(".box");
let rstbtn = document.querySelector(".resetbtn");

let turno = true;
let gameOver = false;
//shubham yadav
const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [6, 7, 8],
];

const checkwinner = () => {
    for (pattern of winpatterns) {
        if (
            boxes[pattern[0]].innerText !== "" &&
            boxes[pattern[0]].innerText === boxes[pattern[1]].innerText &&
            boxes[pattern[1]].innerText === boxes[pattern[2]].innerText
        ) {
            gameOver = true;
            boxes[pattern[0]].style.backgroundColor = "#FFD700";
            boxes[pattern[1]].style.backgroundColor = "#FFD700";
            boxes[pattern[2]].style.backgroundColor = "#FFD700";
            if (boxes[pattern[0]].innerText === "o") {
                setTimeout(() => {
                    alert("Player O wins!");
                }, 100);
            } else {
                setTimeout(() => {
                    alert("Player X wins!");
                }, 100);
            }
        }
    }
};

const resetGame = () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
        box.style.backgroundColor = "#F0F8FF";
    });
    gameOver = false;
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (!gameOver && box.innerText === "") {
            box.innerText = turno ? "o" : "x";
            turno = !turno;
            checkwinner();
        }
    });
});

rstbtn.addEventListener("click", resetGame);
