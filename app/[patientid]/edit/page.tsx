import { fetchPatients } from '@/app/lib/data';
 
export default async function Page() {
    const patients = fetchPatients;
    console.log(patients)
  return (
    <>

    </>
  );
}