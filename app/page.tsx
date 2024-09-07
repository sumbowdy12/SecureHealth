import { fetchMatches } from "./lib/data";
export default async function Home() {
  const matches = await fetchMatches();
  return (
    <div>Hello World</div>

  );
}
