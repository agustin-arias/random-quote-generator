import randomNumber from "./randomNumber";

const colors = [
  "#3b5998",
  "#dc6900",
  "#eb8c00",
  "#559900",
  "#e0301e",
  "#f7347a",
  "#cc181e",
  "#2793e8",
  "#559900",
  "#666666",
  "#f1f1f1",
  "#ff00a9",
  "#fb9f9f",
  "#ff0065",
  "#ffbfd3",
  "#fb5858",
  "#009688",
  "#35a79c",
  "#54b2a9",
  "#65c3ba",
  "#83d0c9",
];

// change the body's background color
export default function changeBodyColor() {
  const color = colors[randomNumber(4)];
  let body = document.getElementsByTagName("body")[0];
  body.style.cssText = `
  background-color: ${color};
  `;
  return color;
}
