'use client';
import { decryptData } from '@/app/utils/crypto';
import { Patient, PatientField } from '@/app/lib/definitions';

interface FormInputs {
  name: string;
  age: string;
  description: string;
}
//View patient data read only
export default async function ViewForm({
  patient,
  patientfield,
}: {
  patient: Patient;
  patientfield: PatientField[];
}) {
  var key = patient.key
  return (
    <div className="container mx-auto my-8 max-w-md p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-indigo-600 mb-6 text-center">
        Patient Details
      </h2>

      <div className="space-y-4">
        <div className="flex justify-between">
          <span className="font-semibold">Patient ID:</span>
          <span>{patient.patientid}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Name:</span>
          <span>{decryptData(patient.name, key)}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Age:</span>
          <span>{decryptData(patient.age, key)}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Description:</span>
          <span>{decryptData(patient.description, key)}</span>
        </div>
      </div>
    </div>
  );
}
