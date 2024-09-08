import { fetchMatches } from "./lib/data";
import { decryptData, encryptData } from "./utils/crypto";
export default async function Home() {
  const matches = await fetchMatches();
  console.log(encryptData("hello world"))
  return (
    <div>Hello World</div>

  );
}
