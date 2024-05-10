import React from "react";
import { TextField, Autocomplete, MenuItem, Chip } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { numbers } from "../Constants";

export default function NumberOfEmployees() {
  return (
    <Autocomplete
      sx={{ m: 1, minWidth: "220px", maxHeight: "5px", maxWidth: "auto" }}
      multiple
      options={numbers}
      getOptionLabel={(option) => option}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          label="Number of Employees"
          size="small"
        />
      )}
      renderOption={(props, option, { selected }) => (
        <MenuItem {...props} key={option} selected={selected}>
          {option}
          {selected ? <CheckIcon color="info" /> : null}
        </MenuItem>
      )}
      renderTags={(value, getTagProps) =>
        value.map((option, index) => (
          <Chip
            key={index}
            variant="outlined"
            label={option}
            {...getTagProps({ index })}
            sx={{
              margin: 1,
              backgroundColor: "#E6E6E6",
              fontWeight: "light",
              color: "lightblack",
              borderRadius: "5px",
              height: "25px",
              fontSize: "12px",
              "& .MuiChip-deleteIcon:hover": {
                color: "#CD5C5C",
              },
            }}
          />
        ))
      }
    />
  );
}
