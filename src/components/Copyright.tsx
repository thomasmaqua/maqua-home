import Typography from "@mui/material/Typography";
import MuiLink from "@mui/material/Link";
import { FunctionComponent } from "react";

const Copyright: FunctionComponent = () => {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <MuiLink color="inherit" href="https://www.maqua.dev">
        Thomas Maqua
      </MuiLink>{" "}
      {new Date().getFullYear()}.
    </Typography>
  );
};


export default Copyright;