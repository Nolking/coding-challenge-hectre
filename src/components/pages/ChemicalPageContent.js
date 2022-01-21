import * as React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow,Paper, TableFooter, TablePagination } from '@mui/material'
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import PaginationItem from "@mui/material/PaginationItem";
// import { Link} from "react-router-dom";
// import useStyles from "./useStyles";


function TablePaginationActions(props) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;
  
    const handleFirstPageButtonClick = (event) => {
      onPageChange(event, 0);
    };
  
    const handleBackButtonClick = (event) => {
      onPageChange(event, page - 1);
    };
  
    const handleNextButtonClick = (event) => {
      onPageChange(event, page + 1);
    };
  
    const handleLastPageButtonClick = (event) => {
      onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };
  
    return (
      <Box sx={{ flexShrink: 0, ml: 2.5 }}>
        <IconButton
          onClick={handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="first page"
        >
          {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
        </IconButton>
        <IconButton
          onClick={handleBackButtonClick}
          disabled={page === 0}
          aria-label="previous page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
        </IconButton>
        <IconButton
          onClick={handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="next page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </IconButton>
        <IconButton
          onClick={handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="last page"
        >
          {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
        </IconButton>
      </Box>
    );
  }
  
  TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
  };

  function createData(name, calories, carbs, protein) {
    return { name, calories, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 24, 4.0),
    createData('Ice cream sandwich', 237,37, 4.3),
    createData('Eclair', 262, 24, 6.0),
    createData('Cupcake', 305, 67, 4.3),
    createData('Gingerbread', 356, 49, 3.9),
    createData('Gingerbread', 356, 49, 3.9),
    
  ];
export default function ChemicalPageContent(props) {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
  
    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
      page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };
  
    
    
    return (
        <div className="main-page-content">
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead className="table-head-info-row">
                        <TableRow >
                            <TableCell>CHEMICALS</TableCell>
                            <TableCell align="right">Calories</TableCell>
                            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                            <TableCell align="right" className="">+ Add new Chemical</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableHead className="table-header">
                        <TableRow>
                            <TableCell>CHEMICAL TYPE</TableCell>
                            <TableCell align="center">ACTIVE INGREDIENT</TableCell>
                            <TableCell align="center">NAME</TableCell>
                            <TableCell align="left">PHI (DAYS)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {(rowsPerPage > 0
                        ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        : rows
                    ).map((row) => (
                        <TableRow key={row.name}>
                        <TableCell component="th" scope="row">
                            {row.name}
                        </TableCell>
                        <TableCell style={{ width: 160 }} align="right">
                            {row.calories}
                        </TableCell>
                        <TableCell style={{ width: 160 }} align="right">
                            {row.carbs}
                        </TableCell>
                        <TableCell style={{ width: 160 }} align="right">
                            {row.protein}
                        </TableCell>
                        </TableRow>
                    ))}

                    {emptyRows > 0 && (
                        <TableRow style={{ height: 53 * emptyRows }}>
                        <TableCell colSpan={6} />
                        </TableRow>
                    )}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TablePagination
                            component="div"
                            rowsPerPageOptions={[5, 10, 25
                                // ,{ label: 'All', value: -1 }
                            ]}
                            colSpan={4}
                            count={rows.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            showFirstButton
                            labelRowsPerPage= "Show records"
                            SelectProps={{
                                inputProps: {
                                'aria-label': 'Show records',
                                },
                                native: true,
                            }}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                            ActionsComponent={TablePaginationActions}
                            />
                        </TableRow>
                    </TableFooter>
                    <Stack spacing={2}>
                    <Pagination
                        page={Number(page)}
                        count={Math.ceil(rows.length / rowsPerPage)}
                        shape="rounded"
                        color="primary"
                        hideFirstButton
                        hideLastButton
                        boundaryCount={2}
                        renderItem={(item) => (
                        <PaginationItem
                        type={"start-ellipsis"}
                            // component={Link}
                            selected
                            // to={`${USER_PATH}/${item.page}`}
                            {...item}
                        />
                        )}
                    />
                    </Stack>
                </Table>
            </TableContainer>
        </div>
    )
}