import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

function createData(date, forwardto, action, notes) {
  return {
    date, forwardto, action, notes
    
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.date}
        </TableCell>
        <TableCell align="right">{row.forwardto}</TableCell>
        <TableCell align="right">{row.action}</TableCell>
        <TableCell align="right">{row.notes}</TableCell>
      
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Complete details
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Notes</TableCell>
                    
                    
                  </TableRow>
                </TableHead>
                <TableBody>
               
                    <TableRow key={row.date}>
                     
                      <TableCell>{row.notes}</TableCell>
                 
                      
                    </TableRow>
                
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}


const rows = [//date, forwardto, action, notes)
  createData('02/11/2021','Jimmy','Initial Registration','Missing Engine1 details Missing Engine1 details Missing Engine1 details Missing Engine1 details Missing Engine1 details Missing Engine1 details'),
  createData('02/10/2021','Ily','Registration Renewal','Missing Engine2 details Missing Engine2 details Missing Engine2 details Missing Engine2 details Missing Engine2 details Missing Engine2 details'),
  createData('02/09/2021','Kelly','COO','Missing Engine3 details, Missing Engine3 details, Missing Engine3 details Missing Engine3 details Missing Engine3 details Missing Engine3 details'),
  createData('02/08/2021','Carol','Placard Replacement','Missing Engine4 details Missing Engine4 details Missing Engine4 details Missing Engine4 details Missing Engine4 details Missing Engine4 details'),
];

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Date</TableCell>
            <TableCell align="right">Forward To</TableCell>
            <TableCell align="right">Action</TableCell>
            <TableCell align="right">Notes</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
