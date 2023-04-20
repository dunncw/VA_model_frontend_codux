import React, { useState, useEffect } from 'react';
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, TableSortLabel, TablePagination } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import styles from './EmployeeDirectory.module.scss';

interface Employee {
  id: number;
  name: string;
  department: string;
  jobTitle: string;
  riskScore: number;
  lastOutreachDate: string;
}

type SortOrder = 'asc' | 'desc';

const EmployeeDirectory: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortColumn, setSortColumn] = useState('id');
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');
  const navigate = useNavigate();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    const fetchedEmployees: Employee[] = [
      {
        id: 1,
        name: 'John Doe',
        department: 'Engineering',
        jobTitle: 'Software Engineer',
        riskScore: 75,
        lastOutreachDate: '2023-03-10',
      },
      {
        id: 2,
        name: 'Jane Smith',
        department: 'Marketing',
        jobTitle: 'Marketing Manager',
        riskScore: 60,
        lastOutreachDate: '2023-02-15',
      },
      {
        id: 3,
        name: 'Bob Jones',
        department: 'Sales',
        jobTitle: 'Sales Manager',
        riskScore: 80,
        lastOutreachDate: '2023-01-01',
      },
      {
        id: 4,
        name: 'Sally Johnson',
        department: 'Engineering',
        jobTitle: 'Software Engineer',
        riskScore: 90,
        lastOutreachDate: '2023-03-10',
      },
      {
        id: 5,
        name: 'Joe Smith',
        department: 'Engineering',
        jobTitle: 'Software Engineer',
        riskScore: 75,
        lastOutreachDate: '2023-03-10',
      },
      {
        id: 6,
        name: 'Jane Doe',
        department: 'Marketing',
        jobTitle: 'Marketing Manager',
        riskScore: 60,
        lastOutreachDate: '2023-02-15',
      },
      {
        id: 7,
        name: 'Bob Johnson',
        department: 'Sales',
        jobTitle: 'Sales Manager',
        riskScore: 80,
        lastOutreachDate: '2023-01-01',
      },
      {
        id: 8,
        name: 'Sally Jones',
        department: 'Engineering',
        jobTitle: 'Software Engineer',
        riskScore: 90,
        lastOutreachDate: '2023-03-10',
      },
      {
        id: 9,
        name: 'Joe Doe',
        department: 'Engineering',
        jobTitle: 'Software Engineer',
        riskScore: 75,
        lastOutreachDate: '2023-03-10',
      },
      {
        id: 10,
        name: 'Jane Johnson',
        department: 'Marketing',
        jobTitle: 'Marketing Manager',
        riskScore: 60,
        lastOutreachDate: '2023-02-15',
      },
      {
        id: 11,
        name: 'Bob Smith',
        department: 'Sales',
        jobTitle: 'Sales Manager',
        riskScore: 80,
        lastOutreachDate: '2023-01-01',
      },
      {
        id: 12,
        name: 'Sally Smith',
        department: 'Engineering',
        jobTitle: 'Software Engineer',
        riskScore: 90,
        lastOutreachDate: '2023-03-10',
      },
      {
        id: 13,
        name: 'Joe Jones',
        department: 'Engineering',
        jobTitle: 'Software Engineer',
        riskScore: 75,
        lastOutreachDate: '2023-03-10',
      },
    ];

    setEmployees(fetchedEmployees);
  }, []);

  const handleSortClick = (column: keyof Employee) => {
    if (sortColumn === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortOrder('asc');
    }
  };

  const handleRowClick = (id: number) => {
    navigate(`/employee-details/${id}`);
  };

  const filteredEmployees = employees.filter(employee =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.jobTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.riskScore.toString().includes(searchTerm.toLowerCase()) ||
    employee.lastOutreachDate.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.id.toString().includes(searchTerm)
  );

  const sortedEmployees = [...filteredEmployees].sort((a, b) => {
    const valueA = a[sortColumn as keyof Employee];
    const valueB = b[sortColumn as keyof Employee];

    if (typeof valueA === 'string' && typeof valueB === 'string') {
      return sortOrder === 'asc'
        ? valueA.localeCompare(valueB)
        : valueB.localeCompare(valueA);
    } else {
      return sortOrder === 'asc' ? (valueA as number) - (valueB as number) : (valueB as number) - (valueA as number);
    }
  });

  const paginatedEmployees = sortedEmployees.slice(page * rowsPerPage, (page * rowsPerPage) + rowsPerPage);
  

  return (
    <Container maxWidth="lg" className={styles.employeeDirectory}>
      <Typography
        variant="h4"
        component="h1"
        className={styles.title}
      >
        Employee Directory
      </Typography>
      <TextField
        label="Search"
        variant="outlined"
        className={styles.searchBar}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {[
                'ID',
                'Name',
                'Department',
                'Job Title',
                'Risk Score',
                'Last Outreach Date',
              ].map((header, index) => {
                const column = [
                  'id',
                  'name',
                  'department',
                  'jobTitle',
                  'riskScore',
                  'lastOutreachDate',
                ][index] as keyof Employee;
                return (
                  <TableCell key={header}>
                    <TableSortLabel
                      active={sortColumn === column}
                      direction={sortOrder}
                      onClick={() => handleSortClick(column)}
                    >
                      {header}
                    </TableSortLabel>
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedEmployees.map((employee) => (
              <TableRow
                key={employee.id}
                onClick={() => handleRowClick(employee.id)}
                style={{ cursor: 'pointer' }}>
                <TableCell>{employee.id}</TableCell>
                <TableCell>{employee.name}</TableCell>
                <TableCell>{employee.department}</TableCell>
                <TableCell>{employee.jobTitle}</TableCell>
                <TableCell>{employee.riskScore}</TableCell>
                <TableCell>{employee.lastOutreachDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={sortedEmployees.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      </Paper>
    </Container>
  );
};

export default EmployeeDirectory;