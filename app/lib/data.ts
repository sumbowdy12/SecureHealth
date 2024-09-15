import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';
import { Patient

 } from './definitions';

 //Fetch all patient data rows
export async function fetchPatients() {
  noStore();
    try {
      const data = await sql<Patient>`SELECT * 
      FROM patients`;
      return data.rows;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch data.');
    }
  }
  //Fetch a patient data by their id
  export async function fetchPatientData(patient: string){
    noStore();
    try{
      const data = await sql<Patient>`SELECT * 
      FROM patients
      WHERE
      patientid::text =  ${`${patient}`}`;

      return data.rows[0];
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch patient data');
    }
  }