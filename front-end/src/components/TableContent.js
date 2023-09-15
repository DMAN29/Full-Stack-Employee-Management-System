import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function TableContent({ employees }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow >
            <StyledTableCell align='center'>First Name</StyledTableCell>
            <StyledTableCell align='center'>Last Name</StyledTableCell>
            <StyledTableCell align='center'>Email Id</StyledTableCell>
            <StyledTableCell align='center'>Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map((emp) => (
            <StyledTableRow key={emp.id}>
              <StyledTableCell align='center'>{emp.firstName}</StyledTableCell>
              <StyledTableCell align='center'>{emp.lastName}</StyledTableCell>
              <StyledTableCell align='center'>{emp.email}</StyledTableCell>
              <StyledTableCell align='center'>{
                <span className="space-x-6"><Button variant="contained" color="success">
                <NavLink to={`update-employee/${emp.id}`}>
                  Update
                </NavLink>
                </Button>
                  <Button variant="contained" color="error">
                <NavLink to={`delete-employee/${emp.id}`}>
                    Delete
                  </NavLink>
                  </Button>
                </span>}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
