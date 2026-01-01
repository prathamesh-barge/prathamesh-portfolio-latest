"use client";

import {
  Box,
  Card,
  CardContent,
  Chip,
  Container,
  Stack,
  Typography,
  Divider,
} from "@mui/material";

import Grid from "@mui/material/Grid";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

const projects = [
  {
    title: "Task Management System",
    description:
      "A full-stack task management platform to help teams organize work, track progress, and meet deadlines efficiently.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Material UI"],
    status: "In Progress",
    highlights: [
      "JWT-based authentication",
      "Role-based access control",
      "RESTful API design",
    ],
  },
  {
    title: "Automated Report Generator",
    description:
      "A backend service for generating dynamic PDF, DOCX, and Excel reports using predefined templates.",
    tech: ["Node.js", "TypeScript", "JSReport"],
    status: "Internal Tool",
    highlights: [
      "Dynamic report templates",
      "Bulk report generation",
      "Performance optimizations",
    ],
  },
  {
    title: "Admin Analytics Dashboard",
    description:
      "A responsive admin dashboard for visualizing data insights and managing system configurations.",
    tech: ["Next.js", "NestJS", "MongoDB", "Chart.js"],
    status: "Concept Project",
    highlights: [
      "Server-side rendering",
      "Modular backend architecture",
      "Data visualization",
    ],
  },
];

export default function ProjectsSection() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: "#dfdee2",
      }}
    >
      <Container maxWidth="lg">
        {/* ================= HEADER ================= */}
        <Stack
          spacing={3}
          sx={{
            mb: { xs: 6, md: 8 },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            justifyContent={{ xs: "center", md: "flex-start" }}
          >
            <RocketLaunchIcon color="warning" />
            <Typography variant="overline" color="warning.main">
              Selected Work
            </Typography>
          </Stack>

          <Typography
            variant="h3"
            fontWeight={800}
            sx={{ fontSize: { xs: "2rem", md: "3rem" } }}
          >
            Projects & Experiments
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              maxWidth: 720,
              mx: { xs: "auto", md: 0 },
              lineHeight: 1.8,
            }}
          >
            A selection of projects that demonstrate my experience in building
            scalable full-stack applications, backend services, and modern
            frontend architectures.
          </Typography>
        </Stack>

        {/* ================= PROJECT GRID ================= */}
        <Grid container spacing={{ xs: 3, md: 4 }}>
          {projects.map((project, index) => (
            <Grid key={index} size={{ xs: 12, md: 6, lg: 4 }}>
              <Card
                sx={{
                  position: "relative",
                  height: "100%",
                  borderRadius: 4,
                  backgroundColor: "background.paper",
                  transition: "all 0.35s ease",
                  overflow: "hidden",

                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: 4,
                    backgroundColor: "warning.main",
                  },

                  "&:hover": {
                    transform: { md: "translateY(-8px)" },
                    boxShadow: {
                      md: "0 20px 40px rgba(255, 152, 0, 0.18)",
                    },
                  },
                }}
              >
                <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
                  <Stack spacing={2.2}>
                    {/* Status */}
                    <Chip
                      label={project.status}
                      size="small"
                      color="warning"
                      sx={{ alignSelf: "flex-start" }}
                    />

                    {/* Title */}
                    <Typography variant="h6" fontWeight={700}>
                      {project.title}
                    </Typography>

                    {/* Description */}
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ lineHeight: 1.7 }}
                    >
                      {project.description}
                    </Typography>

                    {/* Highlights */}
                    <Stack spacing={0.6}>
                      {project.highlights.map((item, i) => (
                        <Typography key={i} variant="body2">
                          • {item}
                        </Typography>
                      ))}
                    </Stack>

                    {/* Tech Stack */}
                    <Stack direction="row" gap={1} flexWrap="wrap" pt={1}>
                      {project.tech.map((tech, i) => (
                        <Chip
                          key={i}
                          label={tech}
                          size="small"
                          variant="outlined"
                          sx={{ fontSize: "0.75rem" }}
                        />
                      ))}
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* ================= END NOTE ================= */}
        <Stack
          spacing={3}
          sx={{
            mt: { xs: 6, md: 10 },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Divider />

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              maxWidth: 680,
              mx: { xs: "auto", md: 0 },
            }}
          >
            More real-world projects and open-source contributions will be added
            as I continue building and refining ideas.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
