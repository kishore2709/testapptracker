import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Field } from "redux-form";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

export default function AddNewForm() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <button type="submit" onClick={handleClickOpen}>
        Add New
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add New File</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please use the below form to create new files
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="fileno"
            label="File No"
            type="text"
            fullWidth
          />
          <br />
          <TextField
            autoFocus
            margin="dense"
            id="acn"
            label="Company ACN"
            type="text"
            fullWidth
          />
          <br />
          <TextField
            autoFocus
            margin="dense"
            id="companyname"
            label="Company Name"
            type="text"
            fullWidth
          />
          <br />
          <TextField
            autoFocus
            margin="dense"
            id="appdate"
            label="Application Date (MM/DD/YYY)"
            type="text"
            fullWidth
          />
          <br />
          Drag and Drop your files here
             <TextareaAutosize
            autoFocus
            margin="dense"
            id="note"
            label="Note"
            rowsMin={6}
            fullWidth
          />
             <br />
             Or Click below for file upload
            <br />
            
            <button type="submit">
              File Upload
            </button>
            <br />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Add file
          </Button>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
