import React from "react";
import { TextField, Autocomplete, MenuItem, Chip } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { techStack } from "../Constants";

export default function TechStack() {
  return (
    <Autocomplete
      sx={{ m: 1, minWidth: 150, maxHeight: '5px', maxWidth: "auto" }}
      multiple
      options={techStack}
      getOptionLabel={(option) => option}
      renderInput={(params) => (
        <TextField {...params} variant="outlined" size="small" label="Tech-Stack" />
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
