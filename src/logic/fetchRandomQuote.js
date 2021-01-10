export default async function fetchRandomQuote() {
  const url = "http://api.quotable.io/random";
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
