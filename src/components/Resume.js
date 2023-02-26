import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import resume from "../resume/resume.json";

export default function Resume() {
  // console.log(resume.resume.education);

  const education = resume.resume.education.map(function (education) {
    return (
      <div key={education.university}>
        <Typography variant="h5">{education.university}</Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {education.school}
        </Typography>
        <p style={{ color: "rgba(0, 0, 0, 0.6)" }}>
          {education.degree} <span>&bull;&nbsp;</span>
          <em>{education.date}</em>
        </p>
      </div>
    );
  });

  const work = resume.resume.work.map(function (work) {
    return (
      <div key={work.company} style={{ paddingBottom: "50px" }}>
        <Typography variant="h5">{work.company}</Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {work.title}
          <span> &bull;&nbsp;</span>
          <em>{work.years}</em>
        </Typography>

        <ul style={{ color: "rgba(0, 0, 0, 0.6)" }}>
          {work.description.split("\n").map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </div>
    );
  });

  const RandomColor = () => {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const skills = resume.resume.skills.map((skills) => {
    const backgroundColor = RandomColor();
    const className = "bar-expand " + skills.name.toLowerCase();
    const width = skills.level;

    return (
      <li key={skills.name}>
        <span style={{ width, backgroundColor }} className={className}></span>
        <em>{skills.name}</em>
      </li>
    );
  });

  return (
    <Container maxWidth="md">
      <Grid container spacing={4} mt={4}>
        <Grid item xs={12} s={12} md={4} lg={4}>
          <Typography className="underline" variant="h5">
            {"Education".toUpperCase()}
          </Typography>
        </Grid>
        <Grid item xs={12} s={12} md={8} lg={8}>
          {education}
        </Grid>
      </Grid>
      <hr style={{ border: "1px solid #eee", margin: "50px" }} />
      <Grid container spacing={4}>
        <Grid item xs={12} s={12} md={4} lg={4}>
          <Typography className="underline" variant="h5">
            {"Work".toUpperCase()}
          </Typography>
        </Grid>
        <Grid item xs={12} s={12} md={8} lg={8}>
          {work}
        </Grid>
      </Grid>
      <hr style={{ border: "1px solid #eee", margin: "0px 50px 50px 50px" }} />
      <Grid container spacing={4} mt={4}>
        <Grid item xs={12} s={12} md={4} lg={4}>
          <Typography className="underline" variant="h5">
            {"Skills".toUpperCase()}
          </Typography>
        </Grid>
        <Grid item xs={12} s={12} md={8} lg={8}>
          <div className="bars">
            <ul className="skills">{skills}</ul>
          </div>
        </Grid>
      </Grid>
      <hr style={{ border: "1px solid #eee", margin: "0px 50px 50px 50px" }} />
    </Container>
  );
}
