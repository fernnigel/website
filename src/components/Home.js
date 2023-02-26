import { Container, Grid, Typography, Avatar, Button } from "@mui/material";

import avatar from "../images/snap-bitmoji.PNG";
import resume from "../resume/Nigel Fernandes - Resume.pdf";

export default function Home() {
  return (
    <Container maxWidth="lg" className="main-screen">
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          s={12}
          md={6}
          lg={6}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div className="avatar grad spin"></div>
          <Avatar
            className="avatar spacing-top-avatar"
            alt="Nigel Fernandes"
            src={avatar}
            sx={{ width: "350px", height: "400px" }}
          />
        </Grid>
        <Grid item xs={12} s={12} md={6} lg={6}>
          <Typography
            alignContent="center"
            variant="h1"
            className="spacing-top"
          >
            Hi, I'm Nigel!
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            A final year computer engineering student with a strong academic
            background in programming, Looking to apply my skills and knowledge
            to real-world challenges in the software development industry.
          </Typography>
          <Grid container spacing={4}>
            <Grid item>
              <a
                style={{ textDecoration: "none" }}
                href={resume}
                download="Nigel-Fernandes-Resume"
                target="_blank"
              >
                <Button className="button-spacing-top" variant="outlined">
                  View Resume
                </Button>
              </a>
            </Grid>
            <Grid item>
              <a
                style={{ textDecoration: "none" }}
                href="https://linkedin.com/in/fernnigel"
              >
                <Button className="button-spacing-top" variant="contained">
                  Linkedin
                </Button>
              </a>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
