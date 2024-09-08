import { fetchMatches } from "./lib/data";
import { decryptData, encryptData } from "./utils/crypto";
import HealthTable from "./healthTable";
export default async function Home() {
  const matches = await fetchMatches();
  console.log(encryptData("hello world"))
  console.log(decryptData(encryptData("hello world")))
  return (
    <>
    <h1>SecureHealth</h1>
    <HealthTable/>
    </>
  );
}
