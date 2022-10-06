let trun = "X";
let gameover = false;
const trunChange = () => {
  return trun === "X" ? "0" : "X";
};

const winfunction = () => {
  let boxtext = document.getElementsByClassName("boxtext");
  let wins = [
    [0, 1, 2],
    [0, 3, 6],
    [3, 4, 5],
    [6, 7, 8],
    [2, 5, 8],
    [1, 4, 7],
    [0, 4, 8],
    [2, 4, 6],
  ];
  wins.forEach((e) => {
    if (
      boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[2]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerText =
        boxtext[e[0]].innerText + " won";
      gameover = true;
      setTimeout(() => {
        alert(boxtext[e[0]].innerText + " won");
      }, 200);
    }
  });
};

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener("click", () => {
    if (boxtext.innerText === "") {
      boxtext.innerText = trun;
      trun = trunChange();
      winfunction();
      if (!gameover) {
        document.getElementsByClassName("info")[0].innerText =
          "Trun for " + trun;
      }
    }
  });
});
