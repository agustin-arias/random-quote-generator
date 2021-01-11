export default async function fetchRandomQuote() {
  const url = "https://api.quotable.io/random";
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
