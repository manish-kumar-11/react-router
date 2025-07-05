import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const Home = () => {
  const user  = [
    {
      name:'Manish',
      Job:'SE',
      Company:'Accenture',
      id:0
    },
     {
      name:'Ashish',
      Job:'SE',
      Company:'IBM',
      id:1,
    },
      {
      name:'Madhav',
      Job:'Hard Ware Engineer',
      Company:'Robert Bosch'
    },
     {
      name:'Venkatesh Kumar',
      Job:'Angular Developer',
      Company:'IBM',
      id:2
    }
  ]
useEffect(()=>{
// const interval = setInterval(() => {
//       setCount(prev => prev + 1);
//     }, 1000); // every 1000ms = 1 second

//     // Cleanup on unmount
//     return () => clearInterval(interval);
},[])
  const [count,setCount] = useState(0)
  
  return (
    <div>
       <div>Welcome to Home Page</div>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
           
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">JOB ROLE</TableCell>
            <TableCell align="right">Company</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {user.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
             style={{ backgroundColor: row.id % 2 === 0 ? 'yellow' : 'white' }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.Job}</TableCell>
              <TableCell align="right">{row.Company}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <div>Current Count is : {count}</div>
{/* <button onClick={()=>setCount(count+1)}>Increment</button>
<button onClick={()=>setCount(count-1)}>Decrement</button> */}

<button onClick={()=>setInterval(()=>setCount(count+1),5000)}>Increment</button>
<button onClick={()=>setCount(count-1)}>Decrement</button>
    {/* {
      user.map((u)=>(
        <div>
          </div>
      ))
    } */}
    </div>
  )
}

export default Home