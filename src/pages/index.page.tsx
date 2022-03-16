import type { NextPage } from "next";
import Typography from "@mui/material/Typography";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <Typography variant="h1" component="h1" gutterBottom>
        Hi, I am Thomas
      </Typography>
      <Typography component="p">I am a web engineer.</Typography>
      <Typography component="p" sx={{ mt: 5 }}>
        This site is currently under construction. Please come back later.
      </Typography>
    </Layout>
  );
};

export default Home;
