import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { fetchPatients } from './lib/data';
import Link from 'next/link';
export default async function healthTable(){
   
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
            <th>Key</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patients) => (
            <tr key={patients.patientid}>
              <td><Link href={ "/" + patients.patientid + "/edit"}>{patients.patientid}</Link></td>
              <td>{patients.age}</td>
              <td>{patients.name}</td>
              <td>{patients.description}</td>
              <td>{patients.key}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      </div>
    );
  }