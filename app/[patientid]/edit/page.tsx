import { fetchPatientData, fetchPatients } from '@/app/lib/data';
import Editform from './editform';
 
export default async function Page({ params }: { params: { patientid: string } }) {
    const id = params.patientid
    const [patient, patients] =  await Promise.all([
      fetchPatientData(id),
      fetchPatients(),
    ]);
    console.log(patient);
  return (
    <>
    <h1 className="text-4xl font-bold text-center text-indigo-600 mb-8">Secure Health</h1>
    <Editform patient={patient} patientfield={patients}/>
    </>
  );
}