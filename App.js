import { useEffect,useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table,Button } from 'react-bootstrap';
import './App.css';

function App(){
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch("https://reqres.in/api/users?page=2")
        .then((res) => {
            return res.json()
        })
        .then((resp) => {
            console.log(resp)
            setData(resp.data)
        })
        .catch((err)=>{
          console.log("error"+err)
        })
  },[])

  const prevPage=()=>{
    fetch("https://reqres.in/api/users?page=1")
        .then((res) => {
            return res.json()
        })
        .then((resp) => {
            console.log(resp)
            setData(resp.data)
        })
        .catch((err)=>{
          console.log("error"+err)
        })
  }
  const nextPage=()=>{
    fetch("https://reqres.in/api/users?page=2")
        .then((res) => {
            return res.json()
        })
        .then((resp) => {
            console.log(resp)
            setData(resp.data)
        })
        .catch((err)=>{
          console.log("error"+err)
        })
  }
  
  console.log('result', data)
  return(
    <div>
      <h1 className="justify-content-center">PAGINATION PROJECT</h1>
     
        <Table className="table table-bordred"  striped bordered hover>
        <thead className="bg-dark text-white">
                <tr>
                   <th>ID</th>
                   <th>Email</th>
                   <th>First Name</th>
                   <th>Last Name</th>
                   <th>Avatar</th>
                </tr>
            </thead>
            <tbody>
            {data && data.map((value, key) => (
                <tr>
                    <td>{value.id}</td>
                    <td>{value.email}</td>
                    <td>{value.first_name}</td>
                    <td>{value.last_name}</td>
                    <td>
                      <img src={value.avatar} alt=""/>
                    </td>
                   
                </tr>
                  ))}
            </tbody>
        </Table>
        <div className="nextPage">
        <Button variant="primary" size="lg" onClick={prevPage}>
         previous
        </Button>{' '}
        <Button variant="secondary" size="lg" onClick={nextPage}>
          Next
        </Button>
        </div>
    </div>
  )
}
export default App;