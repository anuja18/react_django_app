import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Controller } from "react-hook-form";

export default function MySelectField(props) {
  const { label, name, width, control } = props;

  return (
    <FormControl variant="standard" sx={{ width: { width } }}>
      <InputLabel id="demo-simple-select-filled-label">{label}</InputLabel>
      <Controller
        name={name}
        control={control}
        render={({
          field: { onChange, value },
          fieldState: { error },
          formState,
        }) => (
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            onChange={onChange}
            value={value}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"Open"}>Open</MenuItem>
            <MenuItem value={"InProgress"}>InProgress</MenuItem>
            <MenuItem value={"Completed"}>Completed</MenuItem>
            <MenuItem value={"Closed"}>Closed</MenuItem>
          </Select>
        )}
      />
    </FormControl>
  );
}
