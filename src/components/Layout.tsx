import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { FunctionComponent } from "react";
import GithubCorner from "react-github-corner";
import Footer from "./Footer";

const Layout: FunctionComponent = ({ children }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="lg">
        {children}
      </Container>
      <GithubCorner
        href="https://github.com/thomasmaqua/maqua-home"
        bannerColor={theme.palette.primary.main}
        octoColor={theme.palette.background.default}
        title="View source code on Github"
      />
      <Footer />
    </Box>
  );
};

export default Layout;
