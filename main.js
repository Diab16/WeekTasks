let addBtn = document.querySelectorAll(".add-task-btn");
let inp = document.querySelectorAll(".add-task");
let boxs = document.querySelectorAll(".box");
let addBox = document.querySelector("#btn").parentNode.parentNode;

addBtn.forEach((button, currBox) => {
  button.onclick = function () {
    let text = inp[currBox].value;
    if (text != "") {
      boxs[currBox].insertAdjacentHTML(
        "beforeend",
        `<p class="task">${text}</p>`
      );
      inp[currBox].value = "";
    }
  };
});

let additionalButton = document.getElementById("btn");
let additionalInput = document.getElementById("inp");

additionalButton.onclick = function () {
  let text = additionalInput.value;
  if (text != "") {
    addBox.insertAdjacentHTML("beforeend", `<p class="task">${text}</p>`);
    additionalInput.value = "";
  }
};
