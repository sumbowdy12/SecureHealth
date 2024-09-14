'use client';
import { useState } from 'react';
import { createPatient } from '../lib/actions';

// Define the shape of the form inputs
interface FormInputs {
  name: string;
  age: string;
  description: string;
}

export default function Form() {
  const [inputs, setInputs] = useState<Partial<FormInputs>>({});  // Partial makes all properties optional

  const handleChange = (event: { target: { name: string; value: string } }) => {
    const { name, value } = event.target;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  return (
    <form action={createPatient}>
      <label htmlFor="name">Patient Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={inputs.name || ''}
        onChange={handleChange}
      />
      <label htmlFor="age">Patient Age:</label>
      <input
        type="number"
        id="age"
        name="age"
        value={inputs.age || ''}
        onChange={handleChange}
      />
      <label htmlFor="description">Description</label>
      <input
        type="text"
        id="description"
        name="description"
        value={inputs.description || ''}
        onChange={handleChange}
      />
      <input type="submit" />
    </form>
  );
}
