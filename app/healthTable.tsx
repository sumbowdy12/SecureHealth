import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { encryptData, decryptData } from './utils/crypto';
export default async function healthTable(){
    type TObj = {
        patientId: string,
        Age: string,
        Name: string
        Desc: string,
    }
    const df: TObj = {
        patientId: "11000",
        Age: "66",
        Name: 'Bob Gray',
        Desc: 'Osteoporosis',
      }
    const df2: TObj = {
        patientId: "11000",
        Age: "66",
        Name: 'Bob Gray',
        Desc: 'Osteoporosis',
    }
      let t: keyof TObj;
      for (t in df2){
        df2[t] = encryptData(df2[t]);
      }
      console.log(df2)
    return (
      <div>
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>Patient ID</th>
            <th>Age</th>
            <th>Name</th>
            <th>Desc</th>
          </tr>
        </thead>
        <tbody>
        <tr key={df.patientId}>
              <td>{df.patientId}</td>
              <td>{df.Age}</td>
              <td>{df.Name}</td>
              <td>{df.Desc}</td>
            </tr>
            <tr key={df2.patientId}>
              <td>{df2.patientId}</td>
              <td>{df2.Age}</td>
              <td>{df2.Name}</td>
              <td>{df2.Desc}</td>
            </tr>
        </tbody>
      </Table>
      </div>
    );
  }