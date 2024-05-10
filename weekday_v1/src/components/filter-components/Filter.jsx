import * as React from "react";
import { Box } from "@mui/material";
import Roles from "./Roles";
import NumberOfEmployees from "./NumberOfEmployees";
import Experience from "./Experience";
import Remote from "./Remote";
import TechStack from "./TechStack";
import MinBasePay from "./MinBasePay";
import SearchCompany from "./SearchCompany";

export default function Filter() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        display: "flex",
        justifyContent: "center",
        flex: "1",
        rowGap: "50px",
        flexWrap: "wrap",
        borderRadius: 1,
        bgcolor: "white",
        marginTop: "30px",
      }}
    >
      <Roles />
      <Experience />
      <Remote />
      <MinBasePay />
      <NumberOfEmployees/>
      <TechStack />
      <SearchCompany />
    </Box>
  );
}
