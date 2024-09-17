'use server';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { redirect } from 'next/navigation';
import { encryptData } from '../utils/crypto';
import { fetchPatientData } from './data';

var crypto = require('crypto') //Import Crypto library
const FormSchema = z.object({
    patientid: z.string({
        invalid_type_error: 'Please select a patient.',
    }),
    name: z.string(),
    age: z.string(),
    description: z.string(),
    key: z.string(),
  });
   
  const CreatePatient = FormSchema.omit({ patientid: true, key: true });
  const UpdatePatient = FormSchema.omit({ patientid:true , key: true });

  //Create new patient while also generating a secret key for that patient
  export async function createPatient(formData: FormData) {
    //Generate a random key
    var key = crypto.randomBytes(64).toString('hex');

    //Get the data from the input
    const { name, age, description } = CreatePatient.parse({
        name: encryptData(formData.get('name'),key),
        age: encryptData(formData.get('age'),key),
        description: encryptData(formData.get('description'),key),
    });
    await sql`
    INSERT INTO patients (name, age, description, key)
    VALUES (${name}, ${age}, ${description}, ${key})
  `;
  redirect('/doctor');
    }

  //Update a patient while using their already assigned key to encrypt/decrypt
  export async function updatePatient(patientid: string, formData: FormData) {
      var key = (await fetchPatientData(patientid)).key;
      const { name, age, description } = UpdatePatient.parse({
        name: encryptData(formData.get('name'),key),
        age: encryptData(formData.get('age'),key),
        description: encryptData(formData.get('description'),key),
      });
     
      await sql`
        UPDATE patients
        SET name = ${name}, age = ${age}, description = ${description}
        WHERE patientid = ${patientid}
      `;
     
      redirect('/doctor');
    }
  //Delete a patient from the database using their id
  export async function deletePatient(id: string) {
      await sql`DELETE FROM patients WHERE patientid = ${id}`;
      redirect('/doctor');
    }