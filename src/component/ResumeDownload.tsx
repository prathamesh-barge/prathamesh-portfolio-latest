"use client";

import { Box, Button, Stack, Typography } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

interface ResumeDownloadProps {
  title?: string;
  description?: string;
}

export default function ResumeDownload({
  title = "Interested in working together?",
  description = "Download my resume for a detailed look at my experience, skills, and professional journey.",
}: ResumeDownloadProps) {
  return (
    <Box
      sx={{
        px: { xs: 2, sm: 3, md: 6 },
        py: { xs: 5, md: 8 },
        borderRadius: 0,
        background: (theme) =>
          `linear-gradient(135deg,
            ${theme.palette.warning.light}15,
            ${theme.palette.background.paper}
          )`,
        textAlign: "center",
      }}
    >
      <Stack spacing={3} alignItems="center">
        <Typography
          variant="h4"
          fontWeight={600}
          sx={{
            fontSize: { xs: "1.6rem", sm: "2rem" },
          }}
        >
          {title}
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            maxWidth: 520,
            fontSize: { xs: "0.95rem", sm: "1rem" },
          }}
        >
          {description}
        </Typography>

        <Button
          variant="contained"
          color="warning"
          size="large"
          startIcon={<DownloadIcon />}
          href="/Prathamesh_Barge__Resume.pdf"
          download
          sx={{
            mt: 1,
            px: 4,
            py: 1.5,
            width: { xs: "100%", sm: "auto" }, // 👈 responsive behavior
            maxWidth: { xs: "100%", sm: 260 },
            transition: "all 0.3s ease",
            "&:hover": {
              transform: "translateY(-2px)",
              boxShadow: 6,
            },
          }}
        >
          Download Resume
        </Button>

      </Stack>
    </Box>
  );
}
