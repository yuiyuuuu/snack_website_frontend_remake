import React, { useState, useEffect } from 'react';
import useStyles from './AdminPageStyle';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  { id: 'id', label: 'ID', minWidth: 170 },
  { id: 'firstName', label: 'First name', minWidth: 170 },
  { id: 'lastName', label: 'Last name', minWidth: 170 },
  {
    id: 'isAdmin',
    label: 'isAdmin',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'email',
    label: 'Email',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'addressline1',
    label: 'Address Line 1',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'addressline2',
    label: 'Address Line 2',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'city',
    label: 'City',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'postalCode',
    label: 'Postal Code',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'country',
    label: 'Country',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'telephone',
    label: 'Telephone',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'createdAt',
    label: 'CreatedAt',
    minWidth: 170,
    align: 'right',
  },
];

const AdminPage = () => {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className={classes.root}>
      <div className={classes.toolbar}>
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
          <TableContainer sx={{ maxHeight: 600 }}>
            <TableContainer stickyHeader aria-label='sticky table'>
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
                      <TableRow
                        hover
                        role='checkbox'
                        tabIndex={-1}
                        key={row.code}
                      >
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
            </TableContainer>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component='div'
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </div>
    </div>
  );
};

export default AdminPage;
