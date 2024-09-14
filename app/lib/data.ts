import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';
import { Patient

 } from './definitions';
export async function fetchPatients() {
  noStore();
    try {
      const data = await sql<Patient>`SELECT * 
      FROM patients`;
  
      //console.log('Data fetch completed after 3 seconds.');
      return data.rows;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch data.');
    }
  }