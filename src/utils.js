import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormHelperText from "@material-ui/core/FormHelperText";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

export const renderFromHelper = ({ touched, error }) => {
    if (!(touched && error)) {
      return;
    } else {
      return <FormHelperText>{touched && error}</FormHelperText>;
    }
  };
  
  export const renderTextField = ({
    label,
    input,
    meta: { touched, invalid, error },
    ...custom
  }) => (
    <TextField
      label={label}
      placeholder={label}
      error={touched && invalid}
      helperText={touched && error}
      {...input}
      {...custom}
    />
  );
  
  export const radioButton2 = ({ input, ...rest }) => (
    <FormControl>
      <RadioGroup {...input} {...rest}>
        <FormControlLabel value="assigned" control={<Radio />} label="Assigned" />
        <FormControlLabel
          value="unassigned"
          control={<Radio />}
          label="UnAssigned"
        />
        <FormControlLabel value="both" control={<Radio />} label="Both" />
      </RadioGroup>
    </FormControl>
  );
  
  export const renderSelectField = ({
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
  
  export const renderCheckbox = ({ input, label }) => (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            checked={input.value ? true : false}
            onChange={input.onChange}
          />
        }
        label={label}
      />
    </div>
  );
  