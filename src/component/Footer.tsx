"use client";

import { Box, Container, IconButton, Stack, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useEffect, useRef, useState } from "react";
import EmailIcon from "@mui/icons-material/Email";

export default function SignatureFooter() {
  const footerRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Box
      ref={footerRef}
      sx={{
        position: "relative",
        mt: 16,
        py: 12,
        overflow: "hidden",
        background: "linear-gradient(180deg, #1e1e1e 0%, #121212 100%)",
        color: "#fff",

        transform: visible ? "translateY(0)" : "translateY(60px)",
        opacity: visible ? 1 : 0,
        transition: "all 0.9s ease-out",
      }}
    >
      {/* Ambient glow dots */}
      <Box
        sx={{
          position: "absolute",
          top: 80,
          left: 100,
          width: 200,
          height: 200,
          borderRadius: "50%",
          backgroundColor: "warning.main",
          opacity: 0.08,
          filter: "blur(90px)",
          animation: "float 12s ease-in-out infinite",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          bottom: 60,
          right: 120,
          width: 240,
          height: 240,
          borderRadius: "50%",
          backgroundColor: "#ffffff",
          opacity: 0.04,
          filter: "blur(120px)",
          animation: "floatReverse 16s ease-in-out infinite",
        }}
      />

      <Container maxWidth="md">
        <Stack spacing={4} alignItems="center" textAlign="center">
          {/* Name */}
          <Typography variant="h3" fontWeight={700} letterSpacing={1}>
            Prathamesh Barge
          </Typography>

          {/* Role */}
          <Typography
            variant="body1"
            sx={{ color: "rgba(255,255,255,0.7)", maxWidth: 520 }}
          >
            Software Developer · MERN · React · Next.js · NestJS
          </Typography>

          {/* Email */}
          {/* Email */}
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            sx={{
              color: "rgba(255,255,255,0.6)",
              transition: "color 0.3s ease",
              "& a": {
                color: "inherit",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: 6,
              },
              "&:hover": {
                color: "warning.main",
              },
            }}
          >
            <EmailIcon fontSize="small" />
            <a href="mailto:prathameshbarge88@gmail.com">
              prathameshbarge88@gmail.com
            </a>
          </Stack>

          {/* Accent divider */}
          <Box
            sx={{
              width: 80,
              height: 4,
              borderRadius: 2,
              backgroundColor: "warning.main",
            }}
          />

          {/* Social icons */}
          <Stack direction="row" spacing={3}>
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
                href={item.link}
                target="_blank"
                sx={{
                  color: "rgba(255,255,255,0.7)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    color: "warning.main",
                    transform: "translateY(-4px)",
                  },
                }}
              >
                {item.icon}
              </IconButton>
            ))}
          </Stack>

          {/* Copyright */}
          <Typography
            variant="body2"
            sx={{ color: "rgba(255,255,255,0.5)", mt: 4 }}
          >
            © {new Date().getFullYear()} · Built with passion & precision
          </Typography>
        </Stack>
      </Container>

      {/* Keyframes */}
      <Box
        sx={{
          "@keyframes float": {
            "0%": { transform: "translateY(0px)" },
            "50%": { transform: "translateY(-25px)" },
            "100%": { transform: "translateY(0px)" },
          },
          "@keyframes floatReverse": {
            "0%": { transform: "translateY(0px)" },
            "50%": { transform: "translateY(20px)" },
            "100%": { transform: "translateY(0px)" },
          },
        }}
      />
    </Box>
  );
}
