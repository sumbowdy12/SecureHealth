import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { fetchPatients } from '../lib/data';
import Link from 'next/link';
import { decryptData } from '../utils/crypto';

//Health table but decrypted using keys accessible to doctor only
export default async function decryptedhealthTable(){
  const patients = await fetchPatients();
    return (
      <div>
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>Patient ID</th>
            <th>Age</th>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patients) => (
            <tr key={patients.patientid}>
              <td><Link href={ "/" + patients.patientid + "/edit"}>{patients.patientid}</Link></td>
              <td>{decryptData(patients.age,patients.key)}</td>
              <td>{decryptData(patients.name,patients.key)}</td>
              <td>{decryptData(patients.description,patients.key)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      </div>
    );
  }