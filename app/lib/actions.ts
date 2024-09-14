'use server';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { redirect } from 'next/navigation';

const FormSchema = z.object({
    patientid: z.string({
        invalid_type_error: 'Please select a patient.',
    }),
    name: z.string(),
    age: z.coerce
    .number()
    .gt(0, { message: 'Please enter an appropriate age' }),
    description: z.string(),
    key: z.string(),
  });
   
  const CreatePatient = FormSchema.omit({ patientid: true, key: true });

export async function createPatient(formData: FormData) {
const { name, age, description } = CreatePatient.parse({
        name: formData.get('name'),
        age: formData.get('age'),
        description: formData.get('description'),
    });
    await sql`
    INSERT INTO patients (name, age, description, key)
    VALUES (${name}, ${age}, ${description}, '1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef')
  `;
  redirect('/');
    }