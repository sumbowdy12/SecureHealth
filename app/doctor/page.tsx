import DecryptedhealthTable from "./decryptedhealthTable";

export default async function doctor() {
  return (
    <>
    <h1 className="text-4xl font-bold text-center text-indigo-600 mb-8">Secure Health</h1>
    <DecryptedhealthTable/>
    <a className="px-4 py-2 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500" href="/create">Create new Patient</a>
    </>
  );
}
