import { fetchPatientData, fetchPatients } from '@/app/lib/data';
import Viewform from './viewform';
 
export default async function Page({ params }: { params: { patientid: string } }) {
    const id = params.patientid
    const [patient, patients] =  await Promise.all([
      fetchPatientData(id),
      fetchPatients(),
    ]);
  return (
    <>
    <h1 className="text-4xl font-bold text-center text-indigo-600 mb-8">Secure Health</h1>
    <Viewform patient={patient} patientfield={patients}/>
    </>
  );
}