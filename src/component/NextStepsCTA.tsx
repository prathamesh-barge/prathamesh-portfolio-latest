"use client";

import { Box, Button, Stack, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface NextStepsCTAProps {
  onProjectsClick: () => void;
  onContactClick: () => void;
}

export default function NextStepsCTA({
  onProjectsClick,
  onContactClick,
}: NextStepsCTAProps) {
  return (
    <Box
      sx={{
        mt: 10,
        mb: 10,
        px: { xs: 3, md: 6 },
        py: { xs: 6, md: 8 },
        borderRadius: 4,
        background: (theme) =>
          `linear-gradient(135deg, 
            ${theme.palette.warning.light}15, 
            ${theme.palette.background.paper}
          )`,
        textAlign: "center",
      }}
    >
      <Typography
        variant="h4"
        fontWeight={600}
        gutterBottom
        sx={{ mb: 1 }}
      >
        What would you like to explore next?
      </Typography>

      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ mb: 4, maxWidth: 520, mx: "auto" }}
      >
        Take a look at my projects or get in touch to discuss how we can work
        together.
      </Typography>

      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        justifyContent="center"
      >
        <Button
          variant="contained"
          color="warning"
          size="large"
          onClick={onProjectsClick}
          endIcon={<ArrowForwardIcon />}
          sx={{
            px: 4,
            py: 1.5,
            transition: "all 0.3s ease",
            "&:hover": {
              transform: "translateY(-2px)",
              boxShadow: 6,
            },
          }}
        >
          View Projects
        </Button>

        <Button
          variant="outlined"
          color="warning"
          size="large"
          onClick={onContactClick}
          endIcon={<ArrowForwardIcon />}
          sx={{
            px: 4,
            py: 1.5,
            transition: "all 0.3s ease",
            "&:hover": {
              transform: "translateY(-2px)",
              backgroundColor: "warning.light",
              color: "warning.contrastText",
            },
          }}
        >
          Contact Me
        </Button>
      </Stack>
    </Box>
  );
}
