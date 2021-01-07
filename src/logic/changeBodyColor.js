import randomNumber from "./randomNumber";

const colors = ["blue", "orange", "yellow", "green"];

// change the body's background color
export default function changeBodyColor() {
  const color = colors[randomNumber(4)];
  let body = document.getElementsByTagName("body")[0];
  body.style.cssText = `
  background-color: ${color};
  `;
  return color;
}
