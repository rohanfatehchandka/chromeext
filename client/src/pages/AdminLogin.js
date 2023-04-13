import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { useLogin2 } from "../hooks/useLogin2";
import { Box, Paper } from "@mui/material";
import { useLocation } from "react-router-dom";

const AdminLogin = () => {
  const location = useLocation();

  return (
    <Box
      className="mt-9 min-h-[1000px] w-[1000px] "
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          // width: 1000,
          // height: 1000,
        },
      }}
    >
      <Paper elevation={3} className="">
        <div className="p-10 text-2xl ">{location.state.reponse1}</div>
        <div className="p-10 text-2xl ">{location.state.reponse2}</div>
      </Paper>
    </Box>
  );
};

export default AdminLogin;
