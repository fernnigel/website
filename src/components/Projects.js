import { Container, Grid, Typography, Button } from "@mui/material";
import projects from "../resume/projects.json";

export default function Projects() {
  const project = projects.projects.map((project, i) => {
    return (
      <Grid key={i} item xs={12}>
        <div style={{ paddingBottom: "20px" }}>
          <Typography variant="h5"> {project.name}</Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {project.type}
            {project.date ? (
              <>
                <span> &bull;&nbsp;</span>
                <em>{project.date}</em>
              </>
            ) : (
              <></>
            )}
          </Typography>
          <ul style={{ color: "rgba(0, 0, 0, 0.6)" }}>
            {project.description.split(".").map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
          <Typography variant="subtitle1" color="text.secondary">
            Technology:
          </Typography>
          <ul style={{ color: "rgba(0, 0, 0, 0.6)" }}>
            {project.skills.split(",").map((line, i) => (
              <li style={{ display: "inline-block", margin: "10px" }} key={i}>
                &bull; {line}
              </li>
            ))}
          </ul>
          {project.link ? (
            <a style={{ textDecoration: "none" }} href={project.link}>
              <Button>Learn More</Button>
            </a>
          ) : (
            <></>
          )}
        </div>
      </Grid>
    );
  });

  return (
    <Container maxWidth="md" style={{ marginBottom: "100px" }}>
      <Typography
        variant="h4"
        align="center"
        className="underline"
        style={{ marginBottom: "50px" }}
      >
        Projects
      </Typography>
      <Grid container spacing={4}>
        {project}
      </Grid>
    </Container>
  );
}
