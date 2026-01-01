import React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";
import Paper from "@mui/material/Paper";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

import { Box, Divider, IconButton, Typography } from "@mui/material";

const coreSkills = ["HTML", "CSS", "JavaScript", "Node.js"];

const frameworks = [
  "React.js",
  "Next.js",
  "Nest.js",
  "Express.js",
  "JSReports",
];

export default function ProfileSidebar() {
  return (
    <Box sx={{ maxWidth: 300 }} height="160vh">
      <Paper sx={{ p: 3, width: 300 }} elevation={1}>
        {/* ================= PROFILE IMAGE ================= */}
        <Stack
          alignItems="center"
          spacing={1}
          sx={{
            display: { xs: "flex", sm: "flex" }, // 👈 only tablet & mobile
          }}
        >
          <Avatar

          

            src="/avatar.png"
            sx={{
              width: 96,
              height: 96,
              border:"1px solid #787485ff"
            }}
          />

          <Typography variant="h6">Prathamesh Barge</Typography>

          <Typography variant="body2" color="text.secondary">
            Software Developer
          </Typography>
        </Stack>

        {/* ================= SOCIAL ICONS ================= */}
        <Stack
          direction="row"
          spacing={1}
          justifyContent="center"
          sx={{ mt: 2 }}
        >
          {[
            {
              icon: <GitHubIcon />,
              link: "https://github.com/prathamesh-barge",
            },
            {
              icon: <LinkedInIcon />,
              link: "https://www.linkedin.com/in/prathamesh-barge/",
            },
            {
              icon: <TwitterIcon />,
              link: "https://x.com/PrathameshB1252",
            },
          ].map((item, i) => (
            <IconButton
              key={i}
              size="small"
              href={item.link}
              target="_blank"
              sx={{
                color: "text.secondary",
                transition: "all 0.25s ease",
                "&:hover": {
                  color: "warning.main", // 👈 fill color only on hover
                  transform: "translateY(-2px)",
                },
              }}
            >
              {item.icon}
            </IconButton>
          ))}
        </Stack>

        <Divider sx={{ my: 2 }} />

        {/* ================= LANGUAGES ================= */}
        <Typography variant="subtitle1" gutterBottom>
          Languages
        </Typography>

        <Stack spacing={1.5}>
          {[
            { name: "English", value: 90 },
            { name: "Marathi", value: 100 },
            { name: "Hindi", value: 100 },
          ].map((lang) => (
            <Box key={lang.name}>
              <Stack direction="row" justifyContent="space-between">
                <Typography variant="body2">{lang.name}</Typography>
                <Typography variant="body2">{lang.value}%</Typography>
              </Stack>
              <LinearProgress
                variant="determinate"
                value={lang.value}
                sx={{ height: 6, borderRadius: 5 }}
              />
            </Box>
          ))}
        </Stack>

        <Divider sx={{ my: 2 }} />

        {/* ================= SKILLS ================= */}
        <Typography variant="subtitle1" gutterBottom>
          Skills
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          Core Technologies
        </Typography>

        <Stack spacing={1}>
          {coreSkills.map((skill) => (
            <Typography key={skill} variant="body2">
              • {skill}
            </Typography>
          ))}
        </Stack>

        <Divider sx={{ my: 2 }} />

        {/* ================= FRAMEWORKS ================= */}
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          Frameworks & Libraries
        </Typography>

        <Stack spacing={1}>
          {frameworks.map((skill) => (
            <Typography key={skill} variant="body2" sx={{ fontWeight: 500 }}>
              • {skill}
            </Typography>
          ))}
        </Stack>

        <Divider sx={{ my: 2 }} />

        {/* ================= VERSION CONTROL & CLOUD ================= */}
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          Version Control & Cloud
        </Typography>

        <Stack spacing={1}>
          <Typography variant="body2" sx={{ fontWeight: 500 }}>
            • Git & GitHub
          </Typography>

          <Typography variant="body2" sx={{ fontWeight: 500 }}>
            • Microsoft Azure
          </Typography>
        </Stack>
      </Paper>
    </Box>
  );
}
