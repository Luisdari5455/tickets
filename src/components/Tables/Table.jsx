import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination } from '@mui/material';

const CustomTable = ({ titles, data, page, rowsPerPage, handleChangePage, handleChangeRowsPerPage }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead >
          <TableRow>
            {titles.map((title, index) => (
              <TableCell key={index} >{title}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
            <TableRow key={index}>
              {titles.map((title, i) => (
                <TableCell key={i}>{row[title.toLowerCase()]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
};

export default CustomTable;
