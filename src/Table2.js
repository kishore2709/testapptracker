import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import rows from "./rowsData";

const Table2= (props) => {
  const {filedata} = props;
  return(
  <div>
    <Paper className="container">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>S. No</TableCell>
            <TableCell>File No</TableCell>
            <TableCell>ACN</TableCell>
            <TableCell>Company Name</TableCell>
            <TableCell>Application Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filedata.filesList.map(({ id, sid, fno, acn, companyname, appdate }) => (
            <TableRow key={id}>
              <TableCell component="th" scope="row">
                {sid}
              </TableCell>
              <TableCell >{fno}</TableCell>
              <TableCell >{acn}</TableCell>
              <TableCell >{companyname}</TableCell>
              <TableCell >{appdate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  </div>
);
          }
          export default Table2;