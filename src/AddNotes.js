import React from "react";
import Button from "@material-ui/core/Button";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Field } from "redux-form";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";

const renderFromHelper = ({ touched, error }) => {
  if (!(touched && error)) {
    return;
  } else {
    return <FormHelperText>{touched && error}</FormHelperText>;
  }
};
export default function AddNotes() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const renderSelectField = ({
    input,
    label,
    meta: { touched, error },
    children,
    ...custom
  }) => (
    <FormControl error={touched && error}>
      <InputLabel htmlFor="color-native-simple">{label}</InputLabel>
      <Select
        native
        {...input}
        {...custom}
        inputProps={{
          name: input.name,
          id: "color-native-simple",
        }}
      >
        {children}
      </Select>
      {renderFromHelper({ touched, error })}
    </FormControl>
  );

  return (
    <div>
      <button type="submit" onClick={handleClickOpen}>
        Add New Notes
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add New File</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please use the below form add/forward new notes to staff
          </DialogContentText>
          <TextareaAutosize
            autoFocus
            margin="dense"
            id="note"
            label="Note"
            rowsMin={6}
            fullWidth
          />
          <br />
          <Field
            name="stafflist"
            component={renderSelectField}
            label="Forward the note to"
            fullWidth
          >
            <option value="" />
            <option value={1}>Jimmy</option>
            <option value={2}>Ily</option>
            <option value={3}>Carol</option>
            <option value={4}>Perp Staff</option>
          </Field>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Forward the note
          </Button>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
