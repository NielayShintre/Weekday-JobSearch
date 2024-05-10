import { React, useState } from "react";
import { TextField, Autocomplete, MenuItem, Chip } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { data } from "../Constants";
import { useDispatch } from "react-redux";
import { setByLocation } from "../store";

export default function Remote() {
  const dispatch = useDispatch();

  const handleInputChange = (event, value) => {
    dispatch(setByLocation(value));
  };
  return (
    <Autocomplete
      sx={{ m: 1, minWidth: 150, maxHeight: "5px", maxWidth: "auto" }}
      multiple
      options={data}
      getOptionLabel={(option) => option}
      onChange={handleInputChange}
      renderInput={(params) => (
        <TextField {...params} variant="outlined" size="small" label="Remote" />
      )}
      renderOption={(props, option, { selected }) => (
        <MenuItem {...props} key={option} selected={selected}>
          {option}
          {selected ? <CheckIcon color="info" /> : null}
        </MenuItem>
      )}
      renderTags={(value, getTagProps) =>
        value.map((option, index) => {
          const { key, ...otherProps } = getTagProps({ index });
          return (
            <Chip
              key={index}
              variant="outlined"
              label={option}
              {...otherProps}
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
          );
        })
      }
    />
  );
}
