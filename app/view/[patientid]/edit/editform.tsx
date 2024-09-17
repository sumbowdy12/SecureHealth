'use client';
import { useState } from 'react';
import { deletePatient, updatePatient } from '@/app/lib/actions';
import { Patient, PatientField } from '@/app/lib/definitions';
import { decryptData } from '@/app/utils/crypto';
// Define the shape of the form inputs
interface FormInputs {
  name: string;
  age: string;
  description: string;
}

//Edit a patient's data and/or delete
export default function EditForm({
  patient,
  patientfield,
}: {
  patient: Patient;
  patientfield: PatientField[];
}) {
    var crypto = require('crypto')
  const [inputs, setInputs] = useState<Partial<FormInputs>>({}); // Partial makes all properties optional

  const handleChange = (event: { target: { name: string; value: string } }) => {
    const { name, value } = event.target;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const updatePatientWithId = updatePatient.bind(null, patient.patientid);
  const deletePatientWithId = deletePatient.bind(null, patient.patientid);
  const key = patient.key;
  return (
    <>
  <form action={updatePatientWithId} className="space-y-6 max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
    {/* Patient Name */}
    <div>
      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
        Patient Name:
      </label>
      <input
        type="text"
        id="name"
        name="name"
        defaultValue={decryptData(patient.name, key)}
        onChange={handleChange}
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
    </div>

    {/* Patient Age */}
    <div>
      <label htmlFor="age" className="block text-sm font-medium text-gray-700">
        Patient Age:
      </label>
      <input
        type="number"
        id="age"
        name="age"
        defaultValue={decryptData(patient.age, key)}
        onChange={handleChange}
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
    </div>

    {/* Description */}
    <div>
      <label htmlFor="description" className="block text-sm font-medium text-gray-700">
        Description:
      </label>
      <textarea
        id="description"
        name="description"
        rows={4}
        defaultValue={decryptData(patient.description, key)}
        onChange={handleChange}
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      ></textarea>
    </div>

    {/* Submit Button */}
    <div>
      <input
        type="submit"
        value="Update Patient"
        className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>
  </form>

  {/* Delete Button Form */}
  <form action={deletePatientWithId} className="max-w-md mx-auto mt-4">
    <button
      type="submit"
      className="w-full px-4 py-2 bg-red-600 text-white rounded-md shadow hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
    >
      Delete Patient
    </button>
  </form>
</>

  );
}
