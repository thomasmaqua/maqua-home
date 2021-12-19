import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { FunctionComponent } from "react";
import Footer from "./Footer";

const Layout: FunctionComponent = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="xl">
        {children}
      </Container>
      <Footer />
    </Box>
  );
};

export default Layout;
