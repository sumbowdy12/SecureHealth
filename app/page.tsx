import HealthTable from "./healthTable";

//Home Page layout displaying encrypted data

export default async function Home() {
  return (
    <>
    <h1 className="text-4xl font-bold text-center text-indigo-600 mb-8">Secure Health</h1>
    <HealthTable/>
    </>
  );
}
