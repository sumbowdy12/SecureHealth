import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { fetchPatients } from './lib/data';
import Link from 'next/link';

//Table to display data from backend, without any form of decryption

export default async function healthTable(){
   
  const patients = await fetchPatients();
    return (
      <div>
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>Age</th>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patients) => (
            <tr key={patients.patientid}>
              <td>{patients.age}</td>
              <td>{patients.name}</td>
              <td>{patients.description}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      </div>
    );
  }