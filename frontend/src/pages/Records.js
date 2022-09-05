import React from 'react'
import { FormLabel, FormControlLabel, FormControl, RadioGroup, Radio, Typography, Card } from "@mui/material";
import { Grid, TextField, Select, MenuItem, Slider, Button} from "@mui/material";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  { 
    id: 'no', 
    label: 'No.', 
    minWidth: 170,
    align: 'center',
  },
  { 
    id: 'residentID',
    label: 'RESIDENT\u00a0ID', 
    minWidth: 100,
    align: 'center',
  },
  {
    id: 'householdID',
    label: 'HOUSEHOLD\u00a0ID',
    minWidth: 170,
    align: 'center',
  },
  {
    id: 'lastname',
    label: 'LAST\u00a0NAME',
    minWidth: 170,
    align: 'center',
  },
  {
    id: 'firstname',
    label: 'FIRST\u00a0NAME',
    minWidth: 170,
    align: 'center',
  },
  {
    id: 'middlename',
    label: 'MIDDLE\u00a0NAME',
    minWidth: 170,
    align: 'center',
  },
];

function createData(no, residentID, householdID, firstname, lastname, middlename) {
  return { no, residentID, householdID, firstname, lastname, middlename };
}

const rows = [
  createData(1,123,1112,'Rona', 'Mahinay','Delos Reyes'),
  createData(2,124,1112,'Anne', 'Mahinay','Delos Reyes'),
  createData(3,125,145,'John Carlo', 'Cardines','Mantad'),
  createData(4,126,653,'Kamad', 'Felisilda','Namil'),
  createData(5,127,654,'Miguel Cedric', 'Varela','Fernandez'),
  createData(6,128,145,'John Dave', 'Cardines','Mantad'),
  createData(7,129,1112,'Lyka Kaye', 'Mahinay','Delos Reyes'),
  createData(8,130,875,'Hericha Sheen', 'Carabio','Baguio'),
  createData(9,131,324,'Antonet', 'Manatad','Garcia'),
  createData(10,132,1112,'Michael', 'Mahinay','Delos Reyes'),
  createData(11,133,653,'Kelver Ken', 'Felisilda','Namil'),
  createData(12,134,875,'Ivannah Irene', 'Carabio','Baguio'),
  
];
function Records() {

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Card>

      {/* For Desktop UI */}
      <Grid item sx={{ paddingBottom:2, display: { xs: 'none', lg: 'block', xl: 'none' }}}>
        <Typography variant="h4" color="black" align="center" sx={{ fontFamily: 'Helvetica', fontWeight: 300 }}>
             Records
        </Typography>
      </Grid>
      <Grid container direction='column' alignItems='center' sx={{ width: '1000px', height: 490, border: '1px solid red', borderRadius: 1, display: { xs: 'none', lg: 'block', xl: 'none' } }}>
      
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number'
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      </Paper>
      </Grid>

      {/* For Mobile UI */}
      <Grid item sx={{ paddingBottom:2, display: { xs: 'block', lg: 'none', xl: 'block' }}}>
        <Typography variant="h8" color="black" align="center" sx={{ fontFamily: 'Helvetica', fontWeight: 300 }}>
             Records
        </Typography>
      </Grid>
      <Grid container direction='column' alignItems='center' sx={{ width: '500px', height: 490, border: '1px solid red', borderRadius: 1, display: { xs: 'block', lg: 'none', xl: 'block' } }}>
      
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 340 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number'
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      </Paper>
      </Grid>
      
    </Card>

    
  )
}

export default Records