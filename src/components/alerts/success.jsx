import * as React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const Success = ({alert}) => {

  return (
    <>
      <Stack sx={{ width: "100%" }} spacing={2}>
        <Alert severity="success">{alert}</Alert>
      </Stack>
    </>
  );
};

export default Success;