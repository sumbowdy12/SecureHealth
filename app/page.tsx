import { decryptData, encryptData } from "./utils/crypto";
import HealthTable from "./healthTable";

export default async function Home() {
  return (
    <>
    <h1>SecureHealth</h1>
    <HealthTable/>
    </>
  );
}
