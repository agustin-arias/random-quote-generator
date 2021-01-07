import randomNumber from "./randomNumber";

export default async function fetchRandomQuote() {
  const url = "http://quotes.stormconsultancy.co.uk/quotes.json";
  const response = await fetch(url);
  const data = await response.json();
  const { author, quote } = data[randomNumber(44)];
  return { author, quote };
}
